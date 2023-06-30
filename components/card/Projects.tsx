import React from "react";
import Card from "./Card";
import img1 from "../../public/tech1.jpeg";
import img2 from "../../public/tech2.jpeg";
import img3 from "../../public/tech3.jpeg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: img1,
      title: "URL Shortener",
      content:
        "Simple real-time Indonesian traditional game using Redis and Websocket",
      techs: ["Go", "Redis", "Postgres"],
    },
    {
      id: 2,
      image: img2,
      title: "URL Shortener",
      content:
        "Simple real-time Indonesian traditional game using Redis and Websocket",
      techs: ["Go", "Redis", "Postgres"],
    },
    {
      id: 3,
      image: img3,
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
            image={project.image}
            title={project.title}
            content={project.content}
            techs={project.techs}
            button="big"
          />
        );
      })}
    </>
  );
}
