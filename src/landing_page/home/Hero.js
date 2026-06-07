import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      
      <div className='row text-center'>
        <div className='col-12'>
          <img src='media/images/homeHero.png' alt='Hero images' 
          className='img-fluid mb-5' />
          <h1 className='mt-5 display-5 fw-bold'>Invest in everything</h1>
          <p className='lead px-md-5'> Online platform to invest in stocks, mutual funds, and more</p>
          <button className='p-2 btn btn-primary fs-6 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
        </div>

      </div>

    </div>


  )
}

export default Hero
