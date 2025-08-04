import stylles from './ExpertsTeachers.module.scss'
import dfsd from '@public/products/1 product-cover-133 sec-.png'
import { CiShoppingCart } from "react-icons/ci"
import { CiHeart } from "react-icons/ci"
import { FaEye } from "react-icons/fa"
import type { IconType } from 'react-icons';
import IconButton from '../../components/IconButton/IconButton'



const icons: IconType[] = [CiShoppingCart, CiHeart, FaEye]

export default function Product() {


  return(
    <div className={stylles.wrapProducts}>
      <div className={stylles.wrapProduct}>
        <HeaderProduct />
        <MainProduct />
      </div>
    </div>
  )
}



function HeaderProduct() {

  return(
    <div className={stylles.headerProduct} style={{background: `url(${dfsd}) no-repeat cover`}}>
      <div className={stylles.headerProductSale}>Sale</div>
      <div className={stylles.headerProductIcons}>
        {
          icons.map( ( icon, index) => (
            <IconButton key={index} icon={icon}/>
          ))
        }
      </div>
    </div>
  )
}

function MainProduct() {
  return(
    <div className={stylles.contentProduct}>
      <div>
        <p></p>
        <button>
          
        </button>
      </div>
    </div>
  )
}
