import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Home />
      {/* <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;