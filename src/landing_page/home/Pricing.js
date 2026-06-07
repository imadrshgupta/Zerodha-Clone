import React from 'react'

const Pricing = () => {
  return (
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-4 mb-5 p-5'>
          <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
          <p>We poineered the concept of discount broking and price transparency in India. Flat and no hidden charges</p>
          <a href='/b' style={{ textDecoration: "none" }}>See Pricing
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className='col-2'></div>
        <div className='col-6 mb-5 p-5'>
          <div className='row text-center'>
            <div className='col p-3 border'>
             <h1 className='mb-3'>₹2</h1>
             <p>Free equity delivery and <br /> direct mutual funds</p>
            </div>
            <div className='col p-3 border'>
              <h1 className='mb-3'>₹20</h1>
              <p>Intraday and F&O</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Pricing
