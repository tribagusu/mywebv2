import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { DateTime } from "luxon";

export default function Posts() {
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
    <div>
      {recentArticles.map((post) => (
        <Link href={`/posts/${post.slug}`} passHref key={post.slug}>
          <h3>{post.meta.title}</h3>
          <h3>{post.meta.description}</h3>
          <h3>{DateTime.fromJSDate(post.meta.date).toFormat("DD")}</h3>
        </Link>
      ))}
    </div>
  );
}
