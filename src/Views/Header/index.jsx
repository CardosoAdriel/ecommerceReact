import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { Link } from 'react-router-dom'
import './styles.css'

const Header = props =>  {
  const { cart } = useContext(CartContext)

  return (
    <section className='container-header'>
      <h3>Shop Cart</h3>
      <nav>
        <Link to="/" className='links'><strong>P</strong>roduct</Link>
      </nav>
      <Link to="/cart" className='cart'>
        <strong>C</strong>art 
        <span> {cart.length} </span>       
      </Link>
    </section>    
  );
}
export default Header