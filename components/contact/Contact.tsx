import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href="https://github.com/tribagusu"
        target="_blank"
        className="link"
      >
        <AiFillGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/tribagus/"
        target="_blank"
        className="link"
      >
        <AiFillLinkedin />
      </Link>
      <Link href="#" target="_blank" className="link">
        <AiOutlineMail />
      </Link>
    </div>
  );
}
