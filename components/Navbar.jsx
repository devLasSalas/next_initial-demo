import { ActiveLink } from "./ActiveLink";
import styles from './Navbar.module.css';


export const Navbar = () => {
  return (
    <nav className={ styles['menu-container'] }>
      { menuItems.map((item, index )=> (
        <ActiveLink text={ item.text } href={ item.href } key={ index } />
      ))}
    </nav>
  )
}

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];