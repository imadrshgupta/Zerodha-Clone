import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='media/images/education.svg' alt='education'
           
            className='img-fluid ' />
        </div>
        <div className='col-6 mt-5 p-5'>
          <h1 className='mb-3'>Free and open market Education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advance trading</p>
          <a href='/b' style={{ textDecoration: "none" }}>Versity
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
          <p className='mt-5'>TradingQ&A, the most active trading and investing community in India for all your market related queries.</p>
          <a href='/b' style={{ textDecoration: "none" }}>TradingQ&A
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Education
