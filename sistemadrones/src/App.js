import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Orders from './components/pages/Orders';
import Drones from './components/pages/Drones';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import NewOrder from './components/pages/NewOrder';
import Order from './components/pages/Order';
import RouteDrone from './components/pages/RouteDrone';

function App() {
  return (
    <Router>  
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Orders />} />
          <Route path="/drones" element={<Drones />} />
          <Route path="/NovoPedido" element={<NewOrder />} />
          <Route path="/Pedido/:id" element={<Order />} />
          <Route path="/RotaDrone" element= {<RouteDrone/>}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;