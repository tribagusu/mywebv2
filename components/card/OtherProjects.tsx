import React from "react";
import Card from "./Card";

export default function OtherProjects() {
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
    <>
      {projects.map((project) => {
        return (
          <Card
            key={project.id}
            // image={project.image}
            title={project.title}
            content={project.content}
            techs={project.techs}
            button="small"
          />
        );
      })}
    </>
  );
}
