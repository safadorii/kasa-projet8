import React from 'react'
import '../Assets/css/banner.css'
function banner({title, img}) {
  return (
    <div className='banner'>
        <h1 className='banner_title'>{title}</h1>  
         <img src={img} alt="banniere" className='banner_img' />
         </div>
  )
}
export default banner