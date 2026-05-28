const Hero = () => {
    return (
        <section 
            id="about"
            className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] px-8 md:px-16 lg:px-24"
        >
            <div className="max-w-7xl w-full mx-auto realtive z-10 pt-24">
                <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-10">
                    Full-Stack Developer
                </p>


                <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-9xl text-[#e8e0d0] mb-24">
                    <span className="block mb-6 md:mb-8">Jad</span>
                    <span className="block gold-text pl-12 md:pl-24 mt-2">BANI JARID</span>
                </h1>

                <div className="flex justify-center md:justify-end">
                    <p></p>
                    <div className="flex items-center gap-8">
                        <a 
                            href="#contact"
                            data-hover
                            className="px-8 py-3 border border-[#c9a84c]/40 text-xs uppercase tracking-[0.25em] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300">
                            Contact me
                        </a>

                        <a
                            href="#projects"
                            data-hover
                            className="text-xs tracking-[0.25em] uppercase text-[#c9a84c]/40 hover:text-[#e8e0d0] transition-all duration-300 flex items-center gap-3">
                            Learn More <span className="block w-6 h-px bg-current"/>
                        </a>
                    </div>
                </div>
                
            </div>

        </section>
    );
}

export default Hero;
