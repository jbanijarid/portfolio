import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import WhyMe from "../components/WhyMe";
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
    return (
        <div className="bg-zinc-950 text-white">
            <Hero/>
            <WhatIDo/>
            <ProjectsSection/>
            <WhyMe/>
        </div>
    )
}

export default Home;