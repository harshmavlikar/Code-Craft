import React from 'react'
import './Campus.css'
import gallery_1 from "../../assets/gallery_1.png"
import gallery_2 from "../../assets/gallery_2.png"
import gallery_3 from "../../assets/gallery_3.png"
import gallery_4 from "../../assets/gallery_4.png"
import next_icon_2 from "../../assets/next_icon_2.png"

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={next_icon_2} alt="" /></button>
    </div>
  )
}

export default Campus
