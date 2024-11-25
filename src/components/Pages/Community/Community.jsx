import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'

export default function Community() {

    const handleClick =()=>{
            window.open('https://chat.whatsapp.com/JJbjc7YK84h3W4jlHVwmtH', '_blank');
    }




  return (
    <div className='container'>
        <div className="start-wrapper">
            <div className="start-img">
                <img src={tc} alt='tc'/>
            </div>
            <div className="start-content">
                <h2 className='section_title'>Join Our Free Tech Community</h2>
                <p>Unlock the power of knowledge  and innovation by joining our WhatsApp Community</p>
                <button className='register-btn' onClick={handleClick}>Join Now</button>
            </div>
        </div>
    </div>
  )
}
