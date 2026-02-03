import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import WhyMe from "../components/WhyMe";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/ContactMe";
const Home = () => {
    return (
        <div className="bg-zinc-950 text-white">
            <Hero/>
            <WhatIDo/>
            <ProjectsSection/>
            <WhyMe/>
            <Contact/>
        </div>
    )
}

export default Home;