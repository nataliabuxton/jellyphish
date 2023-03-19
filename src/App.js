import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Products } from './components/Products.js';
import { Contact } from './components/Contact';



function App() {
  return ( <div>
  <NavBar />
  <Banner />
  <Services />
  <Products />
  </div>
  )
}

export default App;
