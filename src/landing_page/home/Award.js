import React from 'react'

const Award = () => {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-12 text-center mb-4 mb-lg-0'>
          <img src='media/images/largestBroker.svg' alt="Award graphic showing Zerodha as the largest stock broker in India with growth imagery" 
          className='img-fluid'/>
        </div>
        <div className='col-lg-6 col-12'>
          <h1 className='mb-3'>Largest stock broker in India</h1>
          <p className='text-muted'>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <ul>
                <li>
                  <p> Futures and options</p>
                </li>
                <li>
                  <p> Commodity derivatives</p>
                </li>
                <li>
                  <p> Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-6 col-12'>
              <ul>
                <li>
                  <p> Futures and options</p>
                </li>
                <li>
                  <p> Commodity derivatives</p>
                </li>
                <li>
                  <p> Currency derivatives</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='text-center text-lg-start mt-4'>
          <img src='media/images/pressLogos.png' alt="Logos from press outlets covering Zerodha with a media recognition theme" 
          className='img-fluid'
          style={{width:"95%"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award
