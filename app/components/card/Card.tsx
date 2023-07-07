import { FC } from "react";
import Image from "next/image";
import { CiShare1 } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

interface ICard {
  image?: any;
  title: string;
  content: string;
  techs: string[];
  button: "big" | "small";
}

const Card: FC<ICard> = (props): any => {
  const { image, title, content, techs, button } = props;
  return (
    <div className="bg-dark rounded-md overflow-hidden shadow-sm">
      {image && (
        <Image src={image} alt="tech" className="w-full h-33 object-cover" />
      )}
      <div className="p-5">
        <h4 className="mb-3 font-bold text-lg text-white">{title}</h4>
        <p className="text-base mb-4">{content}</p>
        <div className="flex justify-between items-center">
          {button == "small" && (
            <div className="flex text-2xl gap-2 ">
              <Link
                href="https://www.google.com"
                target="_blank"
                className="hover:text-primary py-1"
              >
                <CiShare1 />
              </Link>
              <Link
                href="https://www.google.com"
                target="_blank"
                className="hover:text-primary py-1"
              >
                <AiFillGithub />
              </Link>
            </div>
          )}
          <div className="text-xs flex gap-1 ml-auto">
            {techs.map((tech) => {
              return (
                <span className="pill" key={tech}>
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
        {button == "big" && (
          <div className="grid grid-cols-2 gap-3 mt-5">
            <Link
              href="https://www.google.com"
              target="_blank"
              className="btn bg-grey text-black hover:bg-white"
            >
              <span className="text-sm">OPEN</span>
              <CiShare1 />
            </Link>
            <Link
              href="https://www.google.com"
              target="_blank"
              className="btn text-primary border-2 border-primary hover:bg-primary hover:text-dark"
            >
              <span className="text-sm">CODE</span>
              <AiFillGithub />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
