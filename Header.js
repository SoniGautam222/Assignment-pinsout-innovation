import React from 'react';

const hearder = () => {
  return (
    <>
    <header>
    <section className='conatiner main-hero-conatiner'>
        <div className='row'>
          <div className='col-12 col-lg-60 header-left-side d-flex justify-content-center flex-column align-items-start' >
            <h1 className='display-2'>Get valuable <br /> industry experience</h1>
              <p>work on industry projects 
                 gain employibility and explore 
                 internships and jobs.</p>
                 <div className='input-group at m60'>
                  <input type="text" className='rounded-pill w-20 me-80 from-control-text'/>
                  <div className='input-group-text'>Explore</div>
                 </div>
                 <div>
                  <div className="col-12 col-lg-6 header-right-side d-flex 
                  justify-right align-items-right ">
                    <img src='./image/img.png' alt='img' className='img-fluid'/>
                  </div>
                 </div>
      
          </div>
        </div>
   </section>
   </header>
       </>
  );
};

export default hearder;