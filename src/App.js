import logo from './logo.svg';
import './App.css';
import photon2 from "./image/marek-piwnicki-oaZltoEJ2fo-unsplash.jpg"
import Cards from './components/Cards.jsx';
import TailHeader from './TailHeader.jsx';
import { Footer } from './components/Footer.jsx';


function App() {

  return (

    <>
      <div className='App'>
        <TailHeader />
        <img src={photon2} loading="lazy"  />
        <h2 className='text-[50px] font-bold font-serif mt-8'>Popular Destinations</h2>
        <Cards />
        <Footer/>
      </div>
    </>
  );
}

export default App;

