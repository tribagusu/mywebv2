import { allPosts } from "@/.contentlayer/generated";
import { DateTime } from "luxon";
import { BsDot } from "react-icons/bs";
import TableOfContents from "@/app/components/TableOfContents";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";

const components: MDXComponents = {
  img: (props) => (
    <Image
      src={props.src || ""}
      alt={props.alt || ""}
      width={1000}
      height={600}
      fill={false}
    />
  ),
};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title, description: post.description };
};

const Post = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className="container flex-col min-h-screen md:w-8/12">
      <h1 className="py-2 mt-10 mb-1 text-4xl font-bold dark:text-textLight">
        {post.title}
      </h1>
      <p className="mb-1 text-lg font-normal dark:text-light">
        {post.description}
      </p>
      <div className="flex flex-col mb-5 md:flex-row">
        <span className="text-sm text-darkLight">
          {DateTime.fromISO(post.date).toFormat("MMM yyyy")}
        </span>
        <span className="items-end hidden mx-1 md:flex">
          <BsDot />
        </span>
        <span className="text-sm text-darkLight">{`${
          post.body.code.split(" ").length
        } words`}</span>
      </div>
      <TableOfContents post={post} />

      <article className="mb-10 prose-custom">
        <MDXContent components={components} />
      </article>
    </main>
  );
};

export default Post;
