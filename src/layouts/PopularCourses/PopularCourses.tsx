import Button from "../../components/Button/Button";
import styles from './PopularCourses.module.scss'

interface ContentCourses{
  title: string
  text: string
  image: string
}

const content: ContentCourses = {
  title: 'Most Popular Courses',
  text: 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ',
  image: '../../../public/MostPopulatCourses.svg'
}
 
function PopularCourses() {


  return(
    <section className={styles.popularCourses}>
      <img src={content.image} alt="" />
      <div className={styles.popularCoursesText}>
        <hr />
        <h2>{content.title}</h2>
        <p>{content.text}</p>
        <Button title="Learn More" variant="login"/>
      </div>
    </section>
  )
}


export default PopularCourses