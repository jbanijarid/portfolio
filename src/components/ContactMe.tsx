import { Mail, Linkedin, Github } from "lucide-react";

const ContactMe = () => {
    return (
        <section className="max-w-3xl mx-auto">
            <div className="bg-zinc-950 text-white py-24 px-6 text-center mx-auto">
                <h2 className="text-3xl font-semibold mb-10">
                    Let’s build something together
                </h2>

                <p className="text-zinc-400 text-lg mb-10">
                    I’m open to new opportunities, projects and collaborations.
                    Feel free to reach out if you want to build a great product.
                </p>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="mailto:jad.jarid99@gmail.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/jad-bani-jarid-446821128/" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/jbanijarid" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                </div>

                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
                    />

                    <input
                        type="text"
                        placeholder="Your Message"
                        className="p-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
                    />

                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-3 rounded-md font-semibold mt-2"
                    >
                        Get in touch
                    </button>

                </form>

            </div>
        </section>
    );
}

export default ContactMe;