
import Header from '../Views/Header'
import './styles.css'

const Layout = props => {
  return(    
    <main>
      <Header />
      <section className='layout-content'>
          {props.children}
      </section>
    </main>
  )
}

export default Layout