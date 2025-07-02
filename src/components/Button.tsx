import styled from "styled-components"




export default function Button({title,...rest}: ButtonProps) {



  return (
    <StyleButton

      {...rest}
    >
      {title}
    </StyleButton>
  )
} 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  title: string
  variant?: 'login'| 'join' | 'quoteNow' | 'learnMore'
}

const StyleButton = styled.button<Omit<ButtonProps, 'title'>>`
  font-weight: bold;
  transition: all 0.15s ease-in-out;

  ${({variant}) => 
    variant === 'login' && `

      color: #96BB7C;
      &:hover{
        text-shadow: 0 0 3px #96BB7C;
      }
  `
  }

  ${({variant}) => 
    variant === 'join' && `
      color: white;
      background: #96BB7C;
      border-radius: 15px;
      padding: 15px;
      &:hover{
        text-shadow: 0 0 5px white;
        box-shadow: 1px 1px 5px black; 
      }
  `
  }

  ${({variant}) => 
    variant === 'quoteNow' && `
      color: white;
      background: #96BB7C;
      border-radius: 15px;
      padding: 15px 40px;
      &:hover{
        text-shadow: 0 0 5px white;
        box-shadow: 1px 1px 5px black; 
      }
  `
  }

  ${({variant}) => 
    variant === 'learnMore' && `
      color: #96BB7C;
      border: 1px solid #96BB7C;
      border-radius: 15px;
      padding: 15px 40px;
      &:hover{
        text-shadow: 0 0 5px #96BB7C;
        box-shadow: 0px 0px 5px #96BB7C; 
      }
  `
  }
`