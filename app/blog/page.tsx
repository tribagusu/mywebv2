import Card from "@/components/blog/Card";
import React from "react";

export default function Blog() {
  return (
    <main className="container md:w-8/12 min-h-screen flex-col">
      <div className="container mt-10">
        <h1 className="text-3xl text-white mb-4">Recent Articles</h1>
      </div>
      <div className="container">
        <Card />
      </div>
      <div className="container mt-5">
        <h1 className="text-3xl text-white mb-4">All Articles</h1>
      </div>
    </main>
  );
}
