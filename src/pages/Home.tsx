import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/ContactMe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div className=" text-white">
            <Navbar/>
            <Hero/>
            <ProjectsSection/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home;