import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import { DateTime } from "luxon";
import { Metadata } from "next";
import { allPosts } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "tribagus - Fullstack Web Developer",
  description: "welcome to my blog",
};

export default function Blog() {
  const posts = allPosts.sort(
    (a, b) =>
      DateTime.fromISO(b.date).toMillis() - DateTime.fromISO(a.date).toMillis()
  );

  return (
    <main className="container flex-col min-h-screen md:w-8/12">
      <div className="container mt-10">
        <h1 className="mb-4 text-3xl font-semibold dark:text-white">
          Recent Articles
        </h1>
      </div>
      <article className="container">
        <h2 className="mb-4 text-2xl font-semibold dark:text-white">
          Code Snippet
        </h2>
        {posts
          .filter((item, i) => i < 3)
          .map((post, i) => {
            return (
              <Link
                href={post.url}
                passHref
                key={i}
                className="flex flex-col bg-bgGray dark:bg-dark mb-5 py-5 px-6 rounded-md border border-borderGray dark:border-bgDark transition ease-in-out duration-200 active:scale-[0.98]"
              >
                <h2 className="mb-2 text-2xl font-medium">{post.title}</h2>
                <p className="mb-2 text-sm dark:text-darkLight">
                  {post.description}
                </p>
                <div className="flex flex-col md:flex-row">
                  <span className="text-sm text-darkLight">
                    {DateTime.fromISO(post.date).toFormat("MMM yyyy")}
                  </span>
                  <span className="items-end hidden mx-1 md:flex">
                    <BsDot />
                  </span>
                  <span className="hidden text-sm text-darkLight md:inline">{`${
                    post.body.code.split(" ").length
                  } words`}</span>
                  <span className="items-end hidden mx-1 md:flex">
                    <BsDot />
                  </span>
                  <ul className="flex gap-2">
                    {post.tags?.map((tag, i) => (
                      <li
                        key={i}
                        className="text-sm underline text-darkLight"
                      >{`${tag}`}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
      </article>
      <div className="container mt-5">
        <h1 className="mb-4 text-3xl font-semibold dark:text-white">
          All Articles
        </h1>
      </div>
      <article className="container">
        {posts.map((post, i) => {
          return (
            <Link
              href={post.url}
              passHref
              key={i}
              className="flex flex-col md:flex-row justify-between px-6 py-1.5 hover:text-accent"
            >
              <span>{post.title}</span>
              <span>{DateTime.fromISO(post.date).toFormat("MMM yyyy")}</span>
            </Link>
          );
        })}
      </article>
    </main>
  );
}
