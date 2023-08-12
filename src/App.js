
import './App.css';
import NavbarComp from './Component/NavbarComp/NavbarComp';
import HeroSection from './Component/HeroSection/HeroSection';
import AboutSection from './Component/AboutSection/AboutSection';
import ProjectsSection from './Component/ProjectsSection/ProjectsSection';
import ContactSection from './Component/ContactSection/ContactSection';
import FooterComp from './Component/FooterComp/FooterComp';



function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HeroSection />
      <AboutSection />
      <ProjectsSection   />
      <ContactSection />
      <FooterComp />
    </div>
  );
}

export default App;
