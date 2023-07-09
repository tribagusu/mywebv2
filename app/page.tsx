import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import { DateTime } from "luxon";
import { Metadata } from "next";
import { allPosts } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "tribagus - Frontend Developer",
  description: "welcome to my blog",
};

export default function Blog() {
  const posts = allPosts.sort(
    (a, b) =>
      DateTime.fromISO(b.date).toMillis() - DateTime.fromISO(a.date).toMillis()
  );

  return (
    <main className="container md:w-8/12 min-h-screen flex-col">
      <div className="container mt-10">
        <h1 className="text-3xl dark:text-white mb-4 font-semibold">
          Recent Articles
        </h1>
      </div>
      <article className="container">
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
                <h2 className="text-2xl mb-2 font-medium">{post.title}</h2>
                <p className="dark:text-darkLight mb-2 text-sm">
                  {post.description}
                </p>
                <div className="flex flex-col md:flex-row">
                  <span className="text-darkLight text-sm">
                    {DateTime.fromISO(post.date).toFormat("DD")}
                  </span>
                  <span className="md:flex items-end mx-1 hidden">
                    <BsDot />
                  </span>
                  <span className="text-darkLight text-sm hidden md:inline">{`${
                    post.body.code.split(" ").length
                  } words`}</span>
                  <span className="md:flex items-end mx-1 hidden">
                    <BsDot />
                  </span>
                  <ul className="flex gap-2">
                    {post.tags?.map((tag, i) => (
                      <li
                        key={i}
                        className=" text-darkLight text-sm underline"
                      >{`${tag}`}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
      </article>
      <div className="container mt-5">
        <h1 className="text-3xl dark:text-white mb-4 font-semibold">
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
              <span>{DateTime.fromISO(post.date).toFormat("DD")}</span>
            </Link>
          );
        })}
      </article>
    </main>
  );
}
