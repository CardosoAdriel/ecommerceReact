import './styles.css'

const CardProduct = props => {
  const {id, description, image, price, addProductToCart, nameButton} = props
  
  const objForAddProduct = {
    id: id,
    description: description,
    image: image,
    price: price
  }
  return (
    <section className='card-container'>
      <figure className='card-image'>
        <img src={image} alt="Imagem do Produto" />
      </figure>

      <div className='card-content'>
        <h4>{description}</h4>
        <p>R${price}</p>
      </div>

      <button onClick={() => {addProductToCart(objForAddProduct)}}>{nameButton}</button>
    </section>
  )
}

export default CardProduct