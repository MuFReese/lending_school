import { nav } from '../../data.ts'
import Navbar from './NavBar.tsx'
import './navogation.css'

export default function Navigation() {

  return(
    <nav className='wrapNav'>

      <div className='wrapNav-title'>{nav.title}</div>

      <Navbar />

    </nav>
  )
}