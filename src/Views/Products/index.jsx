
import './styles.css'
import CardProducts from '../../Components/Card_Product'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/cartContext'

const Products = props => {
  const { addProductToCart } = useContext(CartContext)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    await fetch('http://localhost:3200/products')
    .then((response) => response.json())
    .then(res => {
      console.log(res)
      setProducts(res)
    })
  }
  useEffect(() => getProducts(), [])

  return <>
    <section className='products-container'>
      {!!products && products.map(({ description, id, image, price}) => {
        return <CardProducts            
          key={id}
          id={id}
          description={description}
          image={image}
          price={price}
          addProductToCart={addProductToCart}
          nameButton={"Adicionar"}
        />
      })}
    </section>
  </>
}

export default Products