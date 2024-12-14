import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import HireMe from "../HireMe";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Navbar from "../Navbar";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <HireMe />
      <Footer />
    </>
  ); 
}
