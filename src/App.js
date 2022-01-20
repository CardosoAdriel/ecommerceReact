import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { CartProvider } from './contexts/cartContext';
import Layout from './Layout';
import Routers from './router';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routers />
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
