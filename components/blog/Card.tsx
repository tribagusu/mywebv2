import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";

const Card = () => {
  const blogsInfo = [
    {
      title: "JavaScript Array Methods",
      content: "Nine of the most commonly used array methods",
      time: "May 23, 2023",
      words: "1098",
    },
    {
      title: "Learnings From My First Year as a Software Engineer",
      content: "Nine of the most commonly used array methods",
      time: "May 23, 2023",
      words: "1098",
    },
    {
      title: "Learnings From My First Year as a Software Engineer",
      content: "Nine of the most commonly used array methods",
      time: "May 23, 2023",
      words: "1098",
    },
  ];

  return (
    <article>
      {blogsInfo.map((blog) => {
        return (
          <Link
            href="#"
            key={blog.title}
            className="flex flex-col bg-dark mb-5 p-6 rounded-md shadow-sm hover:shadow-[0_6px_10px_-5px_rgb(255,255,255,0.30)] transition ease-out duration-200"
          >
            <h2 className="text-2xl mb-2">{blog.title}</h2>
            <p className="text-darkLight mb-2">{blog.content}</p>
            <div className="flex">
              <span className="text-darkLight">{blog.time}</span>
              <span className="flex items-end mx-1">
                <BsDot />
              </span>
              <span className="text-darkLight">{`${blog.words} words`}</span>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

export default Card;
