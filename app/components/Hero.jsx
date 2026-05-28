import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20">

      <Image
        src="/profile1.jpeg"
        alt="Shubham's"
        width={120}
        height={120}
        className="rounded-full mb-6"
      />

      <h1 className="text-3xl md:text-5xl font-bold">
        Hi, I'm Shubham
      </h1>

      <p className="mt-4 text-base md:text-xl text-gray-300">
        Diploma Computer Engineering Student
      </p>

      <div className="flex gap-6 mt-6 text-3xl">

        <a
          href="https://github.com/shubhamhegishte16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/shubhamhegishte16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <div className="flex gap-4 justify-center mt-6">

<a
href="/resume.pdf"
download
className="px-6 py-3 rounded-xl bg-white text-black hover:scale-105 transition"
>

Download Resume

</a>

<a
href="#projects"
className="px-6 py-3 rounded-xl border border-white hover:scale-105 transition"
>

View Projects

</a>

</div>

    </section>
  );
}