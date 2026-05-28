import { Mail, Linkedin, Github } from "lucide-react";

const ContactMe = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] px-8 md:px-16 lg:px-24"
          id="contact"
          >
            <div className="bg-[#0d0d0d] rounded rounded-xl border border-[#1e1a16] text-white py-20 px-10 text-center mx-auto">
                <h2 className="font-serif text-[#e8e0d0] text-3xl font-semibold mb-10">
                    Let’s build something together
                </h2>

                <p className="text-[#c5b9a6] font-serif text-lg mb-10">
                    I’m open to new opportunities, projects and collaborations.
                    Feel free to reach out if you want to build a great product.
                </p>

                <div className="flex justify-center text-[#e8e0d0] gap-8 mb-12">
                    <a href="mailto:jad.jarid99@gmail.com" target="_blank" rel="noreferrer" className="hover:text-[#c9a84c] transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/jad-bani-jarid-446821128/" target="_blank" rel="noreferrer" className="hover:text-[#c9a84c] transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/jbanijarid" target="_blank" rel="noreferrer" className="hover:text-[#c9a84c] transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default ContactMe;