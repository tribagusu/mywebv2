import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { DateTime } from "luxon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "tribagus | blog",
  description: "welcome to my tribagus blog",
};

export default function Blog() {
  const postDir = "content";
  const files = fs.readdirSync(path.join(postDir));
  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  // short the post based on date created
  const sortedPosts = posts.sort(
    (a, b) => Number(a.meta.date) - Number(b.meta.date)
  );
  // filter based on index
  const recentArticles = sortedPosts.filter((item, i) => i < 3);
  const allArticles = sortedPosts.filter((item, i) => i > 2);

  return (
    <main className="container md:w-8/12 min-h-screen flex-col">
      <div className="container mt-10">
        <h1 className="text-3xl text-white mb-4">Recent Articles</h1>
      </div>
      <article className="container">
        {recentArticles.map((post, i) => {
          return (
            <Link
              href={`/blog/${post.slug}`}
              passHref
              key={post.slug}
              className="flex flex-col bg-dark mb-5 py-5 px-6 rounded-md shadow-sm hover:shadow-[0_6px_10px_-5px_rgb(255,255,255,0.30)] transition ease-out duration-200"
            >
              <h2 className="text-2xl mb-2">{post.meta.title}</h2>
              <p className="text-darkLight mb-2 text-sm">
                {post.meta.description}
              </p>
              <div className="flex">
                <span className="text-darkLight text-sm">
                  {DateTime.fromJSDate(post.meta.date).toFormat("DD")}
                </span>
                <span className="flex items-end mx-1">
                  <BsDot />
                </span>
                <span className="text-darkLight text-sm">{`${post.meta.words} words`}</span>
                <span className="flex items-end mx-1">
                  <BsDot />
                </span>
                <span className="text-darkLight text-sm">{`${post.meta.tags}`}</span>
              </div>
            </Link>
          );
        })}
      </article>
      <div className="container mt-5">
        <h1 className="text-3xl text-white mb-4">All Articles</h1>
      </div>
      <article className="container">
        {allArticles.map((post, i) => {
          return (
            <Link
              href={`/blog/${post.slug}`}
              passHref
              key={post.slug}
              className="flex justify-between px-6 py-1.5 hover:text-primary"
            >
              <span>{post.meta.title}</span>
              <span>{DateTime.fromJSDate(post.meta.date).toFormat("DD")}</span>
            </Link>
          );
        })}
      </article>
    </main>
  );
}
