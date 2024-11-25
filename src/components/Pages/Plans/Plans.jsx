import React from 'react'
import './Plans.css'

function Plans() {

  const pricingData = [
    {
      title: "Regular Member",
      price: "$40",
      duration: "/month",
      color: '#fff',
      features: ['unlimited access to courses',
        'customer support',
        'Personal mentor',
        'community group'
      ]
    },
    {
      title: "Premium Member",
      price: "$60",
      duration: "/month",
      color: "#6f55f2",
      features: ['unlimited access to courses',
        'customer support',
        'Personal mentor',
        'community group']
    },
    {
      title: "Standard Member",
      price: "$20",
      duration: "/month",
      features: ['unlimited access to courses',
        'customer support',
        'Personal mentor',
        'community group'
      ]
    }

  ]

  return (
    <div className='container'>
      <div className="pricing_top">
        <h2 className='section_title'>Premium Pricing Plan</h2>
        <p>Unlock elite tech service with our premium plan plan</p>
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
                <button className='register-btn'>Join</button>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Plans