
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Routes/Footer';
import Navbar from './Routes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
