"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-[calc(100vh-170px)] overflow-auto ">
      <div className="flex flex-col mx-auto items-center justify-center">
        <h1 className="text-[150px] leading-none">404</h1>
        <p className="text-xl">
          Sorry.. The page you're looking for is not exist.
        </p>
        <button
          onClick={() => router.back()}
          className="btn px-3 bg-grey text-black hover:bg-white mt-5"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
