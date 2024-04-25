import Footer from "Footer/Footer";
import AboutUs from "components/AboutUs/AboutUs";
import Contact from "components/Contact/Contact";
import HomePage from "components/HomePage/HomePage";
import Navbar from "components/Navbar/Navbar";
import Projects from "components/Projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutUs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
