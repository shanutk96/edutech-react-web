import React from 'react'
import './Courses.css'
import ai from '../../../assets/img/ai.png'
import sd from '../../../assets/img/sd.png'
import dg from '../../../assets/img/dg.png'
import hacker from '../../../assets/img/hacking.png'

function Courses() {

  const courseData = [{
    title: "AI development",
    desc: "Master AI development",
    img: ai
  },
  {
    title: "Software Development development",
    desc: "Master Software Development",
    img: sd
  },
  {
    title: "Digital Marketing",
    desc: "Master Digital Marketing",
    img: dg
  },
  {
    title: "Ethical Hacking",
    desc: "Master in Ethical Hacking",
    img: hacker
  },

  ]


  return (
    <div className="container course-container">

      <div className="course-top">
        <h2 className='section_title'>Our Free Courses</h2>
        <p>Top Trending Free Courses With Free Certificates</p>

        <div className="course-wrapper">
          {
            courseData.map((course, index) => (

              <div className="course-item" key={index}>
                <span className='course-icon'>
                  <img src={course.img} alt={course.title}/>
                </span>
                <div className="course-content">
                  <h4>{course.title}</h4>
                  <p>{course.desc}</p>
                </div>
              </div>

            ))
          }



        </div>


      </div>

    </div>
  )
}

export default Courses