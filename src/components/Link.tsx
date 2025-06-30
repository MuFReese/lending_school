


interface Link extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  title: string
}

const link = {
  color: '#737373',
  fontSize: '14px',
  cursor: 'pointer'
}

export default function Link({title, ...props}: Link) {


  return (
    <a
      {...props}
      style={link}
    >
      {title}
    </a>
  )
}