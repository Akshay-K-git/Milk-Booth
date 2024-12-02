import React from 'react'
import './Product.css'
function Product({ imageSrc, title, description }) {
  return (
    <>

<div className="cards">
  <div className="card-image-container">
<img src={imageSrc} alt="" />
  </div>
  <p className="card-head">{title}</p>
  <p className="card-des">
   {description}
  </p>
</div>

    </>
  )
}

export default Product