import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from "../../assets/next_icon.png"
import back_arrow from "../../assets/back_arrow.png"
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = ()=>{
        if(tx > -50)
        {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_arrow} alt="" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user1} alt="" />
                        <div>
                            <h3>Mary Johnson</h3>
                            <span>CodeCraft, India</span>
                        </div>
                    </div>
                    <p>Focus: The availability and quality of academic advising, counseling services, and other support resources. <br />
                    Example: "The academic advising team was incredibly helpful in guiding me through my coursework and career planning. The counseling services provided a valuable support system when I needed it most."</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user2} alt="" />
                        <div>
                            <h3>John Smith</h3>
                            <span>CodeCraft, India</span>
                        </div>
                    </div>
                    <p>Focus: The quality of the library, classrooms, laboratories, and other facilities. <br />
                    Example: "The university's library is well-stocked with resources, and the computer labs provide state-of-the-art technology. The campus is also beautiful and well-maintained, creating a conducive learning environment."</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user3} alt="" />
                        <div>
                            <h3>Emily Davis</h3>
                            <span>CodeCraft, India</span>
                        </div>
                    </div>
                    <p>Focus: The quality of education, faculty, and curriculum. <br />
                    Example: "The university's faculty are highly experienced and dedicated to their students' success. The curriculum is challenging yet rewarding, providing a strong foundation for my future career."</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user4} alt="" />
                        <div>
                            <h3>Harry Potter</h3>
                            <span>CodeCraft, India</span>
                        </div>
                    </div>
                    <p>Focus: The social environment, extracurricular activities, and overall campus atmosphere. <br />
                    Example: "The campus is vibrant and welcoming, with a wide range of clubs and organizations to get involved in. The student body is diverse and friendly, making it easy to meet new people and build lasting friendships."</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
