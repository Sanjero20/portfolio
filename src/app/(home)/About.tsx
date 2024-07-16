const About = () => {
  return (
    <section className="prose">
      <h2 className="sm:mb-2">About me</h2>

      <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        {/* Introduction */}
        <p className="w-full flex-1">
          Hi &#128075;, I&apos;m Angelo Noel Santos, a Computer Science graduate
          with a niche for building web applications. I specialize in building
          User Interfaces (UI) and lately been working on full-stack projects.
        </p>

        {/* Image */}
        <div className="avatar">
          <div className="w-40 rounded bg-base-200 md:w-36 lg:w-32" />
        </div>
      </div>
    </section>
  );
};

export default About;
