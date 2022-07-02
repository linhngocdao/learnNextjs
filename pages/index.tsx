import type { NextPage } from 'next'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <main>
    <ul className='menu'>
          <li><a href="" className='menu__link'>menu 1</a></li>
          <li><a href="" className='menu__link'>menu 2</a></li>
          <li><a href="" className='menu__link'>menu 3</a></li>
          <li><a href="" className='menu__link'>menu 4</a></li>
      </ul>
    <Header />
  </main>
  )
}

export default Home
