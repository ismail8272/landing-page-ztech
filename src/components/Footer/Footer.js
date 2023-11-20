import React from 'react'

const Footer = () => {
  const backgroundImage = 'url("images/footer/FooterImage.png")';

  const divStyle = {
    background: backgroundImage,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    // Add other background properties if necessary
    width: '100%', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
  };
  return (
    <div className="footer">
     <div style={divStyle}>
      <div className="container">
        <div className="flex row pt-5 pb-5 d-none d-lg-flex">
          <div className="flex flex-column col-3 ">
            <img src="/images/footer/footerLogo.svg" alt="footerLogo" width={94} height={42} className='mb-3'></img>
            <p className="colorWhite">
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.
            </p>
           
            <div className="row g-3">
              <div className="col">
                <img src="/images/footer/footerImage2.svg" alt="footerLogo" className="mb-3"></img>
              </div>
              <div className="col">
                <img src="/images/footer/footerImage2.svg" alt="footerLogo" className="mb-3"></img>
              </div>
              <div className="col">
                <img src="/images/footer/footerImage2.svg" alt="footerLogo" className="mb-3"></img>
              </div>

              <div className="col">
                <img src="/images/footer/footerImage2.svg" alt="footerLogo" className="mb-3"></img>
              </div>
              <div className="col">
                <img src="/images/footer/footerImage2.svg" alt="footerLogo" className="mb-3"></img>
              </div>
              <div className="col">
                <img src="/images/footer/footerImage2.svg" alt="footerLogo" className="mb-3"></img>
              </div>
            </div>


        </div>
        <div className=" flex flex-column col-3 pt-4 justify-content-between " >
          <h5 className='colorWhite'>Quick Links</h5>
          <a className="white">Home</a>
          <a className="white">Chi Siam</a>
          <a className="white">S.I.R.E</a>
          <a className="white">SIRE Features</a>
          <a className="white">SIRE Product</a>
          <a className="white">Why SIRE?</a>

          <a className="white">How it Works?</a>
        
        </div>
        <div className="flex flex-column col-3 pt-4 justify-content-between ">
          <h5 className='colorWhite'>Useful Links</h5>
          
          <a className="white">Help Center</a>
          <a className="white">Privacy Policy</a>
          <a className="white">Term & Condition</a>
          <a className="white mb-4">FAQ</a>
      
        <h5 className='colorWhite'>Documents</h5>
        <a className="white text-decoration-underline">Linked Here</a>
        
        </div>
        
        <div className="flex flex-column col-3 pt-4 ">
         <h5 className="mb-4 colorWhite">Contact Us</h5>
         <div className="d-flex flex-row align-items-start">
          <img src="/images/footer/location.svg" alt="Location Icon"/>
          <p className="ms-lg-3 colorWhite">Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
         </div>
         <div className="d-flex flex-row  align-items-start">
          <img src="/images/footer/mailFooter.svg" alt="Location Icon"/>
          <div className="align-items-center">
            <p className="ms-lg-3 colorWhite">email@email.com</p>
            <p className="ms-lg-3 colorWhite" style={{ marginTop: '-10px' }}>support@email.com</p>
          </div>
          
         </div>
         <div className="d-flex flex-row  align-items-start">
          <img src="/images/footer/callFooter.svg" alt="Location Icon" />
          <p className="ms-lg-3 colorWhite">+29 98595 8998</p>
         </div>
      
      
        </div>
      </div>
      {/* ----------------------------------------------------------------------- */}
      <div className="d-flex flex-column pt-5 pb-5 text-center d-lg-none">
        <div className="flex flex-column align-items-center">
          <img src="/images/footer/footerLogo.svg" alt="footerLogo" width={94} height={42} className="mb-3" style={{alignItems:"center"}}>

          </img>
          <p className="colorWhite">Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.</p>
          {/* -------------------------------------------- */}
          <div className="flex justify-content-between">
            <div className="col-3">
              <img src="/images/footer/footerImage2.svg" alt="footerLogo" className='mb-3'></img>
            </div>
            <div className="col-3">
              <img src="/images/footer/footerImage2.svg" alt="footerLogo" className='mb-3'></img>
            </div>
            <div className="col-3">
              <img src="/images/footer/footerImage2.svg" alt="footerLogo" className='mb-3'></img>
            </div>
          </div>
         
          <div className="flex justify-content-between">
            <div className="col-3">
              <img src="/images/footer/footerImage2.svg" alt="footerLogo" className='mb-3'></img>
            </div>
            <div className="col-3">
              <img src="/images/footer/footerImage2.svg" alt="footerLogo" className='mb-3'></img>
            </div>
            <div className="col-3">
              <img src="/images/footer/footerImage2.svg" alt="footerLogo" className='mb-3'></img>
            </div>
          </div>
        </div>
      <div className="flex flex-column col-md-3 mx-auto pt-4 justify-content-between">
          <h5 className="colorWhite">Quick Links</h5>
          <a className="white">Home</a>
          <a className="white">Chi Siam</a>
          <a className="white">S.I.R.E</a>
          <a className="white">SIRE Features</a>
          <a className="white">SIRE Product</a>
          <a className="white">Why SIRE?</a>

          <a className="white">How it Works?</a>
        </div>
      <div className="flex flex-column col-md-3 mx-auto pt-4 justify-content-between">
          <h5 className="colorWhite">Useful Links</h5>
          <a className="white">Help Center</a>
          <a className="white">Privacy Policy</a>
          <a className="white">Term & Condition</a>
          <a className="white mb-4">FAQ</a>
          <h5 className='colorWhite'>Documents</h5>
          <a className="white text-decoration-underline">Linked Here</a>
        </div>
      <div className="flex flex-column col-md-3 mx-auto pt-4">
        <h5 className="mb-4 colorWhite">Contact Us</h5>
        <div className="d-flex flex-column align-items-center ">
          <img src="/images/footer/location.svg" alt="Location Icon" className="mb-2"/>
          <p className="colorWhite">Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
         </div>
         <div className="d-flex flex-column align-items-center ">
            <img src="/images/footer/mailFooter.svg" alt="Location Icon" className="mb-2"/>
            <p className="colorWhite">email@email.com</p>
            <p className="colorWhite">support@email.com</p>
         </div>
         <div className="d-flex flex-column align-items-center ">
          <img src="/images/footer/callFooter.svg" alt="Location Icon" className="mb-2"/>
          <p className="colorWhite">+29 98595 8998</p>
         </div>
      </div>
    </div>

      <hr className="footer-separator" />
      <div class="d-flex justify-content-between py-3">
        <div >All Rights Reserved</div>
        <div className="d-flex justify-content-end">
          <div class="col">
            <img src="images/footer/facebook.svg" alt="Call Icon"></img>
          </div>
          <div class="col ms-3">
            <img src="images/footer/instagram.svg" alt="Call Icon"></img>
          </div>
          <div class="col ms-3">
            <img src="images/footer/twitter.svg" alt="Call Icon"></img>
          </div>
        </div>
      </div>
      
      </div>

     </div>
    </div>
  )
}

export default Footer
