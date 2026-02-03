const Hero = () => {

    const scrollToSection = (id:any) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
            I build full-stack web products from idea to production
            </h1>
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
            Java Spring Boot · React · PostgreSQL · Product-driven engineering
        </p>

        <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition" 
            onClick={() => scrollToSection("projects")}>
                View my Projects
            </button>
            <button className="px-6 py-3 rounded-lg border border-zinc-500 hover:border-zinc-100 transition"
            onClick={() => scrollToSection("cta")}>
                Contact me
            </button>
        </div>
    </section>
  );
};

export default Hero;
