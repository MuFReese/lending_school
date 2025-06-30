import './Companies.css'

const images = ['../../../public/companies/Hooli.png', '../../../public/companies/lya.png', '../../../public/companies/list.png', '../../../public/companies/stripe.png', '../../../public/companies/aws.png', '../../../public/companies/robot.png']



export default function Companies() {


  return(
    <section className="companies">
      {images.map( i => (
        <img  src={i} key={i}/>
      ))}
    </section>
  )
}