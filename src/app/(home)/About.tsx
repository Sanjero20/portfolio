import Image from "next/image";

const About = () => {
  return (
    <section className="prose">
      <h2 className="sm:mb-2">About me</h2>

      <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        {/* Introduction */}
        <p className="not-prose w-full flex-1">
          Hi &#128075;, I&apos;m Angelo Noel Santos, a Computer Science graduate
          with a niche for building web applications. I specialize in building
          User Interfaces (UI) and lately been working on full-stack projects.
        </p>

        {/* Avatar */}
        <Image
          src="/avatar.jpg"
          alt="avatar"
          className="not-prose w-40 rounded-lg md:w-36 lg:w-32"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default About;
