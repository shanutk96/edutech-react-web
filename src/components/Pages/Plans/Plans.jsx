import React from 'react'
import './Plans.css'
import { Link } from 'react-router-dom'

function Plans() {

  const pricingData = [
    {
      id:1,
      title: "Regular Member",
      price: "$20",
      duration: "/month",
      color: '#6f55f2',
      features: 
      ['* Unlimited access to all basic courses',
      '* Limited customer support',
      '* No personal mentor',
      '* Access to community group discussions'
      ]
    },
    {
      id:2,
      title: "Standard Member",
      price: "$40",
      duration: "/month",
      color: "#fff",
      features: 
      [ '* Unlimited access to all courses',
        '* 24/7 customer support (email and chat)',
        '* Personal mentor for guidance',
        '* Access to community group and live Q&A sessions']
    },
    {
      id:3,
      title: "Premium Member",
      price: "$60",
      duration: "/month",
      color : "#6f55f2",
      features: 
      [
      '* Unlimited access to all premium and basic courses',
      '* Priority customer support ',
      '* Personal mentor with weekly one-on-one sessions',
      '* Access to exclusive community group and live masterclasses'
      ]
    }

  ]

  return (
    <div className='container'>
      <div className="pricing_top">
        <h2 className='section_title'>Affortable Pricing Plans</h2>
        <p>Unlock elite tech service with our premium plans</p>
      </div>

      <div className="pricing_wrapper">

        {
          pricingData.map((pricingItem, index) => (
            <div className="pricing_item" key={index}>
              <div className="pricing_card-top" style={{ background: pricingItem.color}}>
                <h2 className='section_title'>{pricingItem.title}</h2>
                <h2 className='pricing_section_title'>
                  {pricingItem.price}<spa>{pricingItem.duration}</spa>
                </h2>
              </div>
              <div className="services">
                <ul>
                  {pricingItem.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to='/purchase' state={pricingItem}><button className='register-btn'>Join</button></Link>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Plans