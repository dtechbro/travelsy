
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Interests from "./components/Interest";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      {/* NavBar */}
      <Navbar />

      <Hero />

      {/*  Grid Section */}
      <Interests />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
