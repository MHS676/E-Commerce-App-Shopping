import React, { useState } from 'react'
import './Product.scss';

const Products = () => {
  const [selectedImg,setSelectedImg] = useState(0)

    const images = [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.customink.com%2Fndx%2F&psig=AOvVaw28rWzd_x6-h8rHeZ5A1QM6&ust=1699360252655000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCZobOwr4IDFQAAAAAdAAAAABAE",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.customink.com%2Fndx%2F&psig=AOvVaw28rWzd_x6-h8rHeZ5A1QM6&ust=1699360252655000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCZobOwr4IDFQAAAAAdAAAAABAE",
    ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt=""  onClick={e=>setSelectedImg(0 )}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1 )}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Products
