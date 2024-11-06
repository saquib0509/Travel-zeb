import logo from './logo.svg';
import './App.css';
import photon2 from "./image/marek-piwnicki-oaZltoEJ2fo-unsplash.jpg"
import hero from "./image/hero.jpg"
import Cards from './components/Cards.jsx';
import TailHeader from './TailHeader.jsx';
import { Footer } from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Blogs from './components/Blogs.jsx';
import Content from './components/Content.jsx';


function App() {

  return (

    <>
      <div className='App'>
        <TailHeader />
        <img src={hero} loading="lazy"  />
        <Cards />
        <Content />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

