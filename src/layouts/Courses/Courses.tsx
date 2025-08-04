import TextContent from '../../components/TextComponent/TextComponent'
import Course from './Course'
import stylled from './Courses.module.css'

type Courses = {
  imageIcon: string
  title: string
  sentence: string
}

const courses: Courses[] = [
  {
    imageIcon: 'courses/school.svg',
    title: 'Training Courses',
    sentence: 'The gradual accumulation of information about'
  },
  {
    imageIcon: 'courses/idea.svg',
    title: 'Training Courses',
    sentence: 'The gradual accumulation of information about'
  },
  {
    imageIcon: 'courses/education.svg',
    title: 'Expert instruction',
    sentence: 'The gradual information about atomic behaviour...'
  },
  {
    imageIcon: 'courses/frame.svg',
    title: 'Lifetime access',
    sentence: 'The gradual accumulation of information about'
  },

]


const CoursesContent = {
  textTitle: "Quick examination",
  title: "Approdable Packages",
  text: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newton"
}





export default function Courses() {


  return(
    <section className={stylled.courses}>
      <TextContent content={CoursesContent}/>
      <div className={stylled.wrapCourses}>
        { courses.map( (value, index) => (
          <Course key={index} course={value}/>
        ))}
      </div>
    </section>
  )
}