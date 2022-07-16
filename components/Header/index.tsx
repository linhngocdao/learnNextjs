import Link from 'next/link'
import React from 'react'
import style from './header.module.scss';

const Header = () => {
  return (
    <div>
    <ul className={style.menu}>
        <li><Link href="/" className={style.menu__link}>Home</Link></li>
        <li><Link href="/products" className={style.menu__link}>Product</Link></li>
        <li><Link href="/about" className={style.menu__link}>About</Link></li>
    </ul>




</div>
  )
}

export default Header