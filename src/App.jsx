import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/About/About";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="Homepage" className="heroSection">
          <Hero />
        </section>
        <Portfolio />
        <section id="About" className="aboutSection">
          <About />
        </section>
        <section id="Contact" className="contactSection">
          <Contact />
        </section>
      </main>
      <footer className="siteFooter">
        <span>© {new Date().getFullYear()} Erik Harutyunyan</span>
        <a href="#Homepage">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
