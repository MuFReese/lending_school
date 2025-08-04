import './Companies.css'

const images = ['/companies/Hooli.png', '/companies/lya.png', '/companies/list.png', '/companies/stripe.png', '/companies/aws.png', '/companies/robot.png']


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


