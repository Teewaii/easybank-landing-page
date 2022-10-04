import './App.css';
import About from './components/about/About';
import Articles from './components/articles/Articles';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
