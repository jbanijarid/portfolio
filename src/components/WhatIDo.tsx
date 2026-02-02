const WhatIdo = () => {
    return (
        <section className="min-h-screen py-24 px-6 bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                <div className="text-4xl font-bold text-center mb-16">
                    <h2>What I Do</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition duration-300 ease-out">
                        <h3 className="text-xl font-semibold mb-4">
                            Backend Engineering
                        </h3>
                        <p className="text-zinc-400">
                            I design and build scalable and secure APIs using
                            Java and Spring Boot, with clean architecture and best practices
                        </p>
                    </div>


                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition duration-300 ease-out">
                        <h3 className="text-xl font-semibold mb-4">
                            Frontend Development
                        </h3>
                        <p className="text-zinc-400">
                            I create modern, fast and responsive interfaces using
                            React and Tailwind CSS
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition duration-300 ease-out">
                        <h3 className="text-xl font-semibold mb-4">
                            Product Thinking
                        </h3>
                        <p className="text-zinc-400">
                            I don’t just code features — I think in user experience,
                            flows and real-world product problems.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default WhatIdo;