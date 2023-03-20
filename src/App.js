import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Products } from './components/Products.js';
import { Contact } from './components/Contact';
import { Bubbles } from './Bubbles';



function App() {
  return ( <div>

  <NavBar />
  <Banner />
  <Services />
  <Products />
  <Contact />
  </div>
  )
}

export default App;
