import About from "./About";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {/* Hero Section */}
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p>A web developer based in the Philippines</p>
          </div>
        </div>
      </div>

      {/*  */}
      <About />
    </div>
  );
}
