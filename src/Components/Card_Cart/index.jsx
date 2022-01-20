import './style.css'

const CardCart = props => {
  const { description, image, price, identfy, removeProductOfCart } = props
  return (
    <div className='card-cart-container'>
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className='card-cart-content'>
        <p>{description}</p>
        <p>R$ <strong>{price}</strong></p>
      </div>
      <button onClick={() => { removeProductOfCart(identfy)}}>Remover</button>
    </div>
  )
}

export default CardCart