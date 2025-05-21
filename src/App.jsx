import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';


function App() {

  return (
    <div className="bg-white">
      <Header />
      {/* main section */}
      <main>
        <Banner></Banner>
        {/* about section */}
        <About></About>
        {/* skills section */}
        <Skills></Skills>
        {/* project section */}
        <Projects></Projects>
        {/* contact section */}
        <Contact></Contact>
        {/* footer section */}
        <Footer />

      </main>
    </div>
  );
}

export default App;
