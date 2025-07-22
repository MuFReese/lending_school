import TextContent from "../../components/TextComponent/TextComponent"
import stylles from './ExpertsTeachers.module.scss'


interface ContentData{
  textTitle: string
  title: string
  text: string
}

const textContentHeader: ContentData  = {
  textTitle: 'Health Queries',
  title: 'Our Experts Teacher',
  text: 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'
}


function ExpertsTeacher() {

  return(
    <section className={stylles.wrap}>
      <TextContent content={textContentHeader} />
    </section>
  )
}





export default ExpertsTeacher