import Footer from "Footer/Footer";
import AboutUs from "components/AboutUs/AboutUs";
import Container from "components/Container/Container";
import Navbar from "components/Navbar/Navbar";
import Projects from "components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Container />
      <AboutUs />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
