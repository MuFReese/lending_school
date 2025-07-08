// import styled from "styled-components"

import styles from './Button.module.scss'


export default function Button({title, variant,...rest}: ButtonProps) {



  return (
    <button
      {...rest}
      className={`${styles.button} ${styles[variant]}`}
    >
      {title}
    </button>
  )
} 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  title: string
  variant: 'login' | 'join' | 'quoteNow' | 'learnMore'
}

