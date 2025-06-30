import Course from './Course'
import stylled from './Courses.module.css'
import CoursesMainContent from './CoursesMainContent'

type Courses = {
  imageIcon: string
  title: string
  sentence: string
}

const courses: Courses[] = [
  {
    imageIcon: '../../../public/courses/school.svg',
    title: 'Training Courses',
    sentence: 'The gradual accumulation of information about'
  },
  {
    imageIcon: '../../../public/courses/idea.svg',
    title: 'Training Courses',
    sentence: 'The gradual accumulation of information about'
  },
  {
    imageIcon: '../../../public/courses/education.svg',
    title: 'Expert instruction',
    sentence: 'The gradual information about atomic behaviour...'
  },
  {
    imageIcon: '../../../public/courses/frame.svg',
    title: 'Lifetime access',
    sentence: 'The gradual accumulation of information about'
  },

]


export default function Courses() {


  return(
    <section className={stylled.courses}>
      <CoursesMainContent />
      <div className={stylled.wrapCourses}>
        { courses.map( (value, index) => (
          <Course key={index} course={value}/>
        ))}
      </div>
    </section>
  )
}