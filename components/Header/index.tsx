import Link from 'next/link'
import React from 'react'
import style from './Header.module.scss';

const Header = () => {
  return (
    <div>
    <ul className={style.menu}>
        <li><Link href="/" className={style.menu__link}>menu 1</Link></li>
        <li><Link href="/products" className={style.menu__link}>menu 2</Link></li>
        <li><Link href="/about" className={style.menu__link}>menu 3</Link></li>
    </ul>
</div>
  )
}

export default Header