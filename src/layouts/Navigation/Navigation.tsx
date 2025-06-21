import { nav } from '../../data.ts'
import Navbar from './NavBar.tsx'
import './navogation.css'

export default function Navigation() {

  return(
    <nav className='wrapNav'>

      <h2>{nav.title}</h2>

      <Navbar />

    </nav>
  )
}