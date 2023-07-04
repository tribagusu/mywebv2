import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { DateTime } from "luxon";
import { BsDot } from "react-icons/bs";
import TableOfContents from "@/app/components/TableOfContents";
import { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const postDir = "content";
  const files = fs.readdirSync(path.join(postDir));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", "").replace("%20", "-"),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("content", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({
  params: slug,
}: Params): Promise<Metadata> {
  const postData: any = getPost(slug);
  const post: any = await postData;

  return {
    title: `${post.frontMatter.title} | tribagus`,
    description: post.frontMatter.description,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <main className="container md:w-8/12 min-h-screen flex-col">
      <h1 className="text-4xl text-light font-bold mt-10 mb-1 py-2">
        {props.frontMatter.title}
      </h1>

      <p className="text-light mb-1 text-lg">{props.frontMatter.description}</p>
      <div className="flex mb-5">
        <span className="text-darkLight text-sm">
          {DateTime.fromJSDate(props.frontMatter.date).toFormat("DDD")}
        </span>
        <span className="flex items-end mx-1">
          <BsDot />
        </span>
        <span className="text-darkLight text-sm">{`${props.frontMatter.words} words`}</span>
        <span className="flex items-end mx-1">
          <BsDot />
        </span>
        <span className="text-darkLight text-sm">triBagus</span>
      </div>
      <TableOfContents props={props} />
      <div className="text-[18px] text-text mb-10">
        <MDXRemote source={props.content} />
      </div>
    </main>
  );
}
