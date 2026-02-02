import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import WhyMe from "../components/WhyMe";

const Home = () => {
    return (
        <div className="bg-zinc-900 text-white">
            <Hero/>
            <WhatIDo/>
            <WhyMe/>
        </div>
    )
}

export default Home;