"use client";

import { useState } from "react";
import Card from "./Card";
import ButtonSeeMore from "./ButtonSeeMore";

export default function OtherProjects() {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      id: 1,
      title: "URL Shortener",
      content:
        "Simple real-time Indonesian traditional game using Redis and Websocket",
      techs: ["Go", "Redis", "Postgres"],
    },
    {
      id: 2,
      title: "URL Shortener",
      content:
        "Simple real-time Indonesian traditional game using Redis and Websocket",
      techs: ["Go", "Redis", "Postgres"],
    },
    {
      id: 3,
      title: "URL Shortener",
      content:
        "Simple real-time Indonesian traditional game using Redis and Websocket",
      techs: ["Go", "Redis", "Postgres"],
    },
    {
      id: 4,
      title: "URL Shortener",
      content:
        "Simple real-time Indonesian traditional game using Redis and Websocket",
      techs: ["Go", "Redis", "Postgres"],
    },
    {
      id: 5,
      title: "URL Shortener",
      content:
        "Simple real-time Indonesian traditional game using Redis and Websocket",
      techs: ["Go", "Redis", "Postgres"],
    },
    {
      id: 6,
      title: "URL Shortener",
      content:
        "Simple real-time Indonesian traditional game using Redis and Websocket",
      techs: ["Go", "Redis", "Postgres"],
    },
  ];

  return (
    <div className="container mt-2">
      {/* <span className="container mb-10"> */}
      <div className="flex justify-center mb-5">
        <button
          className="p-4 bg-none hover:text-light text-darkLight transition ease-out duration-200"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? "Show more" : "Show less"}
        </button>
      </div>
      {/* </span> */}
      {showMore && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                title={project.title}
                content={project.content}
                techs={project.techs}
                button="small"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
