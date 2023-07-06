import { allPosts } from "@/.contentlayer/generated";
import { DateTime } from "luxon";
import { BsDot } from "react-icons/bs";
import TableOfContents from "@/app/components/TableOfContents";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";

const mdxComponents: MDXComponents = {};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};

const Post = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="container md:w-8/12 min-h-screen flex-col">
      <h1 className="text-4xl text-light font-bold mt-10 mb-1 py-2">
        {post.title}
      </h1>

      <p className="text-light mb-1 text-lg">{post.description}</p>
      <div className="flex mb-5">
        <span className="text-darkLight text-sm">
          {DateTime.fromISO(post.date).toFormat("DDD")}
        </span>
        <span className="flex items-end mx-1">
          <BsDot />
        </span>
        <span className="text-darkLight text-sm">{`${
          post.body.code.split(" ").length
        } words`}</span>
        <span className="flex items-end mx-1">
          <BsDot />
        </span>
        <span className="text-darkLight text-sm">Posted by triBagus</span>
      </div>
      <TableOfContents post={post} />
      <div className="prose-custom mb-10">
        <MDXContent components={mdxComponents} />
      </div>
    </article>
  );
};

export default Post;
