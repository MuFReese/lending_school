import stylles from './IconButton.module.scss'
import type { IconType } from 'react-icons'

interface IconButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  icon: React.ReactNode | IconType
}


function IconButton({icon, ...props}: IconButtonsProps) {
  const IconComponent = icon as React.ElementType

  return(
    <button
      {...props}
      className={stylles.iconButton}
    >
      {typeof icon === 'function' ? <IconComponent /> : icon}
    </button>
  )
}


export default IconButton