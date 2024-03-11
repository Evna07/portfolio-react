import Footer from "Footer/Footer";
import AboutUs from "components/AboutUs/AboutUs";
import HomePage from "components/HomePage/HomePage";
import Navbar from "components/Navbar/Navbar";
import Projects from "components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutUs />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
