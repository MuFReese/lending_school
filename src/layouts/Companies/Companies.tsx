import './Companies.css'

const images = ['../../../public/companies/Hooli.png', '../../../public/companies/lya.png', '../../../public/companies/list.png', '../../../public/companies/stripe.png', '../../../public/companies/aws.png', '../../../public/companies/robot.png']


export default function Companies() {

  return(
    <section className="scroller-container">
      <div className='scroller-track'>
        {images.map((img, index) => (
          <div className="logo-container" key={index}>
            <img 
              src={img} 
              alt="Company logo"
              className="logo"
              loading="lazy"
            />
          </div>
        ))}
        {images.map((img, index) => (
          <div className="logo-container" key={index}>
            <img src={img} alt="Company logo" className="logo" />
          </div>
        ))}
      </div>
    </section>
  )
}


