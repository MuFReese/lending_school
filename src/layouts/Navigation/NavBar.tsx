import Button from '../../components/Button.tsx'
import { nav } from '../../data.ts'
import { useMediaQuery } from 'react-responsive';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useCallback, useState } from 'react';
import Link from '../../components/Link.tsx';

interface Navbar{
  isOpen: boolean
  onClose: () => void
}


export default function Navbar() {
  const [ isClosing, setClosing] = useState<boolean>(false)

  const isDesktopPhone = useMediaQuery({maxWidth: 800})
  const isDesktopTable = useMediaQuery({minWidth: 800})


  return (
    <div className='wrapNav-navbar'>

      {
        isDesktopTable && 
        <>    
          <div className='wrapNav-navbar-navigation'>
            {nav.nav.map( element => (
              <Link title={element} key={element}/>
            ))}
          </div>

          <div className='wrapNav-navbar-authorization'>
            <Button title='Login' variant='login'/>
            <Button title='JOIN US' variant='join'/>
          </div>
        </>
      }

      {
        isDesktopPhone && 
        <>
          <div className='wrapNav-navbar-authorization'>
            <Button title='Login' variant='login'/>
            <Button title='JOIN US' variant='join'/>
          </div>

          <ButtonNavbar onClick={() => setClosing(true)}/>

          <GetNavbar isOpen={isClosing} onClose={() => setClosing(false)}/>
        </>
      }
    </div>
  )
}






function ButtonNavbar({...rest}: React.ButtonHTMLAttributes<HTMLButtonElement>) {


  return(
    <>
      <button {...rest}>
        <IoReorderThreeOutline style={{fontSize: '25px'}}/>
      </button>
      
    </>
  )
}



function GetNavbar( {isOpen, onClose}: Navbar) {
  const [ isClosing, setClosing] = useState(false)

  console.log('onClose', isOpen)

  const handleChange = useCallback( () => {
    setClosing(true)

    setTimeout( () => {
      setClosing(false)
      onClose()
    }, 200)
  }, [onClose])
  


  return (
    <div className={`wrapNav-navbar-navigationForMobile ${ isOpen ? 'navBarOpen' : ''} ${ isClosing ? 'navbarClose' : ''}`}>
      {nav.nav.map( element => (
        <a  key={element}>{element}</a>
      ))}
      <span onClick={handleChange}>&times;</span>
    </div>
  )
}