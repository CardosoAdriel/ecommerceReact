import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [ cart, setCart ] = useState([])
  const [ amount, setAmount ] = useState(0)

  useEffect(() => {
    if(cart.length > 0) {
      const sum = cart.reduce((accumulator, prod) => accumulator + prod.price, 0)
      setAmount(() => sum)
    } else if (cart.length === 0) {
      setAmount(0)
    }
    
  }, [cart])

  const addProductToCart = (product) => {
    setCart([...cart, product])
  }

  const removeProductOfCart = (indexProductClicked) => {
    const filteredProductsOfCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== indexProductClicked
    )
    setCart(filteredProductsOfCart)
  }

  const removeAllProductsOfCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ 
        cart,
        amount, 
        addProductToCart, 
        removeProductOfCart, 
        removeAllProductsOfCart 
      }}>
      {children}
    </CartContext.Provider>
  )    
}