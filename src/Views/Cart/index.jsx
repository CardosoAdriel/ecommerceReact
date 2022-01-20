import { useContext } from 'react'
import CardCart from '../../Components/Card_Cart'
import { CartContext } from '../../contexts/cartContext'
import './style.css'
const Cart = props => {
  const {cart, amount, removeProductOfCart} = useContext(CartContext)

  return (
    <section className='cart-container'>
      <div className='cart-header'>
        <h2><strong>Q</strong>uantidade <strong>{cart.length}</strong></h2>
        <h2>|</h2>
        <h2><strong>T</strong>otal <strong>R${amount.toFixed(2)}</strong></h2>
      </div>
      <div className='cart-content'>
        {!!cart && cart.map(({description, image, price, id}, index) => {
          return <CardCart key={index}
            identfy={index}
            description={description}
            image={image}
            price={price}
            removeProductOfCart={removeProductOfCart}
          />
        })}
      </div>
    </section>
  )
}

export default Cart