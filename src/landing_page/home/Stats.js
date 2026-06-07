import React from 'react'

const Stats = () => {
  return (
    <div className='container my-5'>
      <div className='row align-items-center p-5'>
        <div className='col-lg-6 col-12 mb-4 mb-lg-0 p-5'>
          <h1 className='mb-5'>Trust with confidence</h1>
          <h2>Customer-first always</h2>
          <p>That's why 1.3+ cr customer trust Zerodha with ₹3.5 lakh crores worth of equity investment</p>
          <h2>No spam or gimmicks</h2>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality that you use at your pace, the way you like</p>
          <h2>The Zerodha universe</h2>
          <p>Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored service specific to your needs</p>
          <h2>Do better with money</h2>
          <p>with initatives like Nudge and Kill Switch, We don't just facilate transaction, but actively help you do better with your money.</p>
        </div>
        <div className='col-lg-6 col-12 text-center'>
          <img src='media/images/ecosystem.png'
            alt='ecosystem'
            className='img-fluid'
            style={{ width: '75%' }}
          />
          <div className='text-center'>
            <a href='/a' style={{ textDecoration: "none" }} className='mx-5'>Explore our product <i className="bi bi-arrow-right"></i></a>
            <a href='/b' style={{ textDecoration: "none" }}>Try kite demo
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Stats;
