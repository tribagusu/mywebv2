import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex gap-5">
      <Link
        href="https://github.com/tribagusu"
        target="_blank"
        className="link"
      >
        <AiFillGithub />
        <p className="text-[17px]">Github</p>
      </Link>
      <Link
        href="https://www.linkedin.com/in/tribagus/"
        target="_blank"
        className="link"
      >
        <AiFillLinkedin />
        <p className="text-[17px]">Linkedin</p>
      </Link>
      <Link
        href="mailto:tri.bagus21@gmail.com?subject=Mail from tribagus website"
        target="_blank"
        className="link"
      >
        <AiOutlineMail />
        <p className="text-[17px]">Email</p>
      </Link>
    </div>
  );
}
