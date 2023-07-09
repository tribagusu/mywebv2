import { allPosts } from "@/.contentlayer/generated";
import { DateTime } from "luxon";
import { BsDot } from "react-icons/bs";
import TableOfContents from "@/app/components/TableOfContents";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {};

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
    <main className="container md:w-8/12 min-h-screen flex-col">
      <h1 className="text-4xl dark:text-textLight font-bold mt-10 mb-1 py-2">
        {post.title}
      </h1>
      <p className="dark:text-light mb-1 text-lg font-normal">
        {post.description}
      </p>
      <div className="flex flex-col md:flex-row mb-5">
        <span className="text-darkLight text-sm">tribagus</span>
        <span className="md:flex items-end mx-1 hidden">
          <BsDot />
        </span>
        <span className="text-darkLight text-sm">
          {DateTime.fromISO(post.date).toFormat("DDD")}
        </span>
        <span className="md:flex items-end mx-1 hidden">
          <BsDot />
        </span>
        <span className="text-darkLight text-sm">{`${
          post.body.code.split(" ").length
        } words`}</span>
      </div>
      <TableOfContents post={post} />

      <article className="prose-custom mb-10">
        <MDXContent components={mdxComponents} />
      </article>
    </main>
  );
};

export default Post;
