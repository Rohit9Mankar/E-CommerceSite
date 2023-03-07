import './App.css';
import Heading from './Components/Heading';
import Products from './Components/StorePage/Products';
import Navigation from './Components/Navigation/Navigation';
import NavProvider from './Store/NavProvider';
import Footer from './Components/Footer';

function App() {
  return (
    <NavProvider>

      <Navigation></Navigation>
      <Heading></Heading>
      <Products></Products>

    <Footer></Footer>
    </NavProvider>

  );
}

export default App;
