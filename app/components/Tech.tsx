import {
  BiLogoJavascript,
  BiLogoPython,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoDocker,
} from "react-icons/bi";
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";
import { SiSolidity, SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiMongodb, DiSass } from "react-icons/di";

export default function Tech() {
  const techs = [
    {
      name: "JavaScript",
      logo: <BiLogoJavascript />,
    },
    {
      name: "Solidity",
      logo: <SiSolidity />,
    },
    {
      name: "NextJS",
      logo: <TbBrandNextjs />,
    },
    {
      name: "SQL (Postgres)",
      logo: <BiLogoPostgresql />,
    },
    {
      name: "TypeScript",
      logo: <TbBrandTypescript />,
    },
    {
      name: "NodeJS",
      logo: <BiLogoNodejs />,
    },
    {
      name: "Tailwind",
      logo: <SiTailwindcss />,
    },
    {
      name: "MongoDB",
      logo: <DiMongodb />,
    },
    {
      name: "Python",
      logo: <BiLogoPython />,
    },
    {
      name: "ReactJS",
      logo: <GrReactjs />,
    },
    {
      name: "SASS",
      logo: <DiSass />,
    },
    {
      name: "Docker",
      logo: <BiLogoDocker />,
    },
  ];

  return (
    <>
      {techs.map((tech) => {
        return (
          <div
            key={tech.name}
            className="text-[16px] font-normal flex justify-start items-center gap-2 p-1 text-accent dark:hover:text-white transition ease-out duration-[1s]"
          >
            <span>{tech.logo}</span>
            <span className="hover:cursor-default">{tech.name}</span>
          </div>
        );
      })}
    </>
  );
}
