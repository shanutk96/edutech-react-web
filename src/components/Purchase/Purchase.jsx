import React from 'react'
import './Purchase.css'

import { Link, useLocation } from 'react-router-dom';

function Purchase() {

//   const handleEnroll = (e) =>{
//       e.preventDefault();
//       Swal.fire({
//         icon: 'success',
//         title: 'Enrolled',
//         text: `You have been enrolled to '${title}' plan`,
//         confirmButtonText: 'Okay'
//       });
    
// }

  const location = useLocation()
  const  { title, price, features } = location.state  //The properties name, price, and features are "picked out" from the state object


  return (
    
    <div className="purchase-container">
      <h2 className="purchase-plan-name">{title}</h2>
      <h2 className="purchase-price">{price}</h2>
      <ul className="purchase-list">
      {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link to='/payment' state={{title,price}}><button className="purchase-button">Enroll now</button> </Link>
    </div>
  )
}

export default Purchase