import Header from '../../Components/Header';
import Navigation from '../../Components/Navigation';
import Hero from '../../Components/Hero';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Grid from '../../Components/Grid';



function Home() {
  return (  
    <div className="App">
      <Header />
      <Hero />
      <Navigation />
      <Grid />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;