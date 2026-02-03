const WhyMe = () => {
  return (
    <section className="py-20 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Why work with me
        </h2>

        <p className="text-zinc-400 text-lg mb-12">
          I have a Master’s degree in Software Engineering and hands-on experience
          building full-stack web applications from scratch. I enjoy turning ideas
          into real products, with clean code, good UX and scalable architecture
        </p>

        <div className="grid sm:grid-cols-2 gap-8 text-left">

          <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6">
            <h3 className="font-semibold mb-2">
              🎓 Software Engineering
            </h3>

            <p className="text-zinc-400">
              Master’s degree in Software Engineering with strong foundations in
              architecture, databases and best practices
            </p>
          </div>

          <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6">
            <h3 className="font-semibold mb-2">
              🧠 Product mindset
            </h3>

            <p className="text-zinc-400">
              I think beyond code — I focus on usability, flows and real-world
              user needs
            </p>
          </div>

          <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6">
            <h3 className="font-semibold mb-2">
              ⚙️ Full-stack skills
            </h3>

            <p className="text-zinc-400">
              From backend APIs to frontend UI, I can build and connect every
              layer of a product
            </p>
          </div>

          <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6">
            <h3 className="font-semibold mb-2">
              🚀 Real projects
            </h3>

            <p className="text-zinc-400">
              I’ve built multiple full-stack applications
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyMe;
