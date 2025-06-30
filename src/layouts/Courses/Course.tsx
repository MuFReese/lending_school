import stylled from './Courses.module.css'

import Stain from '../../../public/courses/stain.svg.react'

type CourseProps = {
  course: {
    imageIcon: string
    title: string
    sentence: string
  }
}


export default function Course({ course}: CourseProps) {


  return(
    <div className={stylled.course}>
      <div className={stylled.courseImage}>
        <Stain className={stylled.courseImageStain}  fill="currentColor" />
        <img className={stylled.coutseImageIcon} src={course.imageIcon} alt={course.title} />
      </div>
      <h5>{course.title}</h5>
      <hr />
      <p>{course.sentence}</p>
    </div>
  )
}
  