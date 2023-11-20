import React from 'react'

const AboutSection = () => {
  return (
    <div className='container'>
      <div class="row">
        <div class="d-none d-lg-flex col-md-6 position-relative">
          <img src="images/AboutSection/firstImage.png" alt="Image 1" class="img-fluid d-none d-md-block"/>
          <img src="images/AboutSection/secondImage.png" alt="Image 2" class="img-fluid position-absolute bottom-0 left-0 end-0 mb-3 me-3 d-none d-md-block"/>
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center d-none d-lg-flex  justify-content-center">
          <h3 className="color-green">S.I.R.E</h3>
          <h2 className='pb-3'>Smart Integrated Renewable Energy</h2>
          <hr className="after-line pb-3"/>
          <p>S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per la produzione, conversione e gestione dell'energia solare, studiato specificatamente per installazioni all'interno di condomini.</p>
       </div>
      <div className=" d-lg-none  flex flex-column">
        <div className="flex flex-row">
          <img src="images/AboutSection/firstImage.png" alt="Image 1" class="img-fluid " width={"50%"} height={"300px"}/>
          <img src="images/AboutSection/secondImage.png" alt="Image 2" class="img-fluid "width={"50%"} height={"300px"}/>
       </div>
      <div class="">
        <h3 className="color-green">S.I.R.E</h3>
        <h2 className='pb-3'>Smart Integrated Renewable Energy</h2>
        <p>S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per la produzione, conversione e gestione dell'energia solare, studiato specificatamente per installazioni all'interno di condomini.</p>
    </div>

    </div>
  </div>
</div>
  )
}

export default AboutSection
