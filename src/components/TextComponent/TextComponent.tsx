import React from "react"
import stylles from './textComponent.module.scss'

// interface TextContentProps extends React.AllHTMLAttributes<HTMLDivElement>{
//   content: {
//     textTitle: string
//     title: string
//     text: string
//   }
// }

interface ContentData {
  textTitle: string
  title: string
  text: string
}

type TextContentProps = {
  content: ContentData
} & React.HTMLAttributes<HTMLDivElement>


const TextContent: React.FC<TextContentProps> = ({ content, ...rest }) => {

  return(
    <div {...rest} className={stylles.wrap}>
      <h6>{content.textTitle}</h6>
      <h2>{content.title}</h2>
      <p>{content.text}</p>
    </div>
  )
}

export default TextContent