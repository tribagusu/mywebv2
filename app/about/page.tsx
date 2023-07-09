import OtherProjects from "@/app/components/card/OtherProjects";
import Projects from "@/app/components/card/Projects";
import Contact from "@/app/components/Contact";
import Form from "@/app/components/Form";
import Tech from "@/app/components/Tech";

export default function Home() {
  return (
    <main className="container md:w-8/12 h-[calc(100vh-175px)] flex-col">
      <div className="container mt-10">
        <h1 className="text-[18px]">
          Hello world, <strong className="text-accent">triBagus</strong> here!
        </h1>
        <p>
          a Frontend Developer who passionate with fullstack, web, and{" "}
          <span className="text-accent">coffee</span>.
        </p>
        <br />
        <p className="mb-2">I&apos;m playing around with these stacks:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <Tech />
        </div>
        <br />
        <p className="mb-4">Hit me directly:</p>
        <div className="flex">
          <Contact />
        </div>
      </div>
      {/* <div className="container mt-8">
        <h2 className="heading">Project Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Projects />
        </div>
      </div> */}
      {/* <OtherProjects /> */}
      {/* <div className="container mt-8 mb-10">
        <h2 className="heading">Let&apos;s Talk</h2>
        <div className="flex flex-col">
          <p className="mb-8 w-[60%]">
            Please hit me directly through the form or links below
          </p>
          <div className="flex gap-5">
            <Form />
          </div>
        </div>
      </div> */}
    </main>
  );
}
