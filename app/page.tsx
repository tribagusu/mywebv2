import OtherProjects from "@/app/components/card/OtherProjects";
import Projects from "@/app/components/card/Projects";
import Contact from "@/app/components/contact/Contact";
import Form from "@/app/components/contact/Form";
import Tech from "@/app/components/Tech";

export default function Home() {
  return (
    <main className="container md:w-10/12 min-h-screen flex-col">
      <div className="container mt-10">
        <h1 className="text-3xl text-white mb-4 font-bold">
          Hello world, <span className="text-primary">triBagus</span> here!
        </h1>
        <p>
          a{" "}
          <span className="text-primary text-lg">Fullstack Web Developer</span>{" "}
          who uses TypeScript, NextJS, and MERN stacks. <br /> Sometimes
          I&apos;m playing around with Python, Solidity, and Coffee Machine :)
        </p>
      </div>
      <div className="container mt-10">
        <h2 className="heading">Technologies that I use:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <Tech />
        </div>
      </div>
      <div className="container mt-10">
        <h2 className="heading">Projects I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Projects />
        </div>
      </div>
      <div className="container mt-10">
        <h2 className="heading">Other Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <OtherProjects />
        </div>
      </div>
      <div className="container mt-10 mb-10">
        <h2 className="heading">Let&apos;s Talk</h2>
        <div className="flex flex-col">
          <p className="mb-8 w-[60%]">
            Please hit me directly through the form or links below
          </p>
          <div className="flex gap-5">
            <Form />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
