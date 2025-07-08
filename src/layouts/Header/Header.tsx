import Button from "../../components/Button/Button"
import { headerContent } from "../../data"
import BackgroundHeader from "./BackgroundHeader"
import classes from './header.module.css'

export default function Header() {


  return (
    <header className={classes.header}>
      < BackgroundHeader />
      <div className={classes.wrapHeaderText}>
        <h5>{headerContent.welcomeTitle}</h5>
        <h1>{headerContent.title}</h1>
        <h4>{headerContent.text}</h4>
        <div>
          <Button  title="Get Quote Now" variant="quoteNow"/>
          <Button title="Learn more" variant="learnMore"/>
        </div>
      </div>
    </header>
  )
}