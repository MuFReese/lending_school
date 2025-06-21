import Button from '../../components/Button.tsx'
import { nav } from '../../data.ts'
import { useMediaQuery } from 'react-responsive';
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Navbar() {
  const isDesktopPhone = useMediaQuery({minWidth: 800})
  const isDesktopTable = useMediaQuery({maxWidth: 800})

  return (
    <div className='wrapNav-navbar'>

      {
        isDesktopPhone && 
        <>    
          <div className='wrapNav-navbar-navigation'>
            {nav.nav.map( element => (
              <a key={element}>{element}</a>
            ))}
          </div>

          <div className='wrapNav-navbar-authorization'>
            <Button title='Login' variant='login'/>
            <Button title='JOIN US' variant='join'/>
          </div>
        </>
      }

      {
        isDesktopTable && 
        <>
          <div className='wrapNav-navbar-authorization'>
            <Button title='Login' variant='login'/>
            <Button title='JOIN US' variant='join'/>
          </div>

          <ButtonNav/>

        </>
      }
    </div>
  )
}


function ButtonNav() {


  return(
    <>
      <button>
        <IoReorderThreeOutline/>
      </button>
      
    </>
  )
}