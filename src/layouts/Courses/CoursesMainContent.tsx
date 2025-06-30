import stylled from './Courses.module.css'



const CoursesContent = {
  welcomeTitle: 'Quick examination',
  title: 'Approdable Packages',
  textParam: 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'
}


export default function CoursesMainContent() {

  return (
    <div className={stylled.CoursesMainContent}>
      <h6>{CoursesContent.title}</h6>
      <h2>{CoursesContent.title}</h2>
      <p>{CoursesContent.textParam}</p>
    </div>
  )
}