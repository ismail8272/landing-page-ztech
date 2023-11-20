import React from 'react'
import { Button } from 'react-bootstrap'
const ContactSection = () => {
  return (
    <div className='container'>
        <div className='flex  flex-column  align-items-center '>
            <h2 className='pb-3'>CONTATTACI</h2>
            <hr className='after-line pb-5'/>
        </div>
        <div className='row'>
            <div className="col-lg-3 pb-4"  >
                <div className='border border-light-dark rounded p-3' >
                    <div className="d-flex flex-xl-row flex-column  justify-content-start">
                        <div>
                            <img src="/images/ContactSection/location.svg" alt="Location Icon" className="mb-2"/>
                        </div>
                        <div>
                            <p className="ms-xl-3">Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
                        </div>
                    </div>
                    <div className="d-flex flex-xl-row flex-column justify-content-start">
                        <div>
                            <img src="/images/ContactSection/mail.svg" alt="Location Icon" className="mb-2"/>
                        </div>
                        <div>
                            <p className='ms-xl-3' >email@email.com</p>
                            <p className='ms-xl-3'>support@email.com</p>
                        </div>
                    </div>
                    <div className="d-flex flex-xl-row flex-column  justify-content-start pb-3">
                        <div>
                            <img src="/images/ContactSection/call.svg" alt="Location Icon" className="mb-2"/>
                        </div>
                        <div>
                            <p className="ms-xl-3">+29 98595 8998</p>
                        </div>
                    </div>
                    <hr className='separator pb-3'/>
                    <p> We Will get back to you within
                        24 hours. Or Call us Now
                    </p>


                </div>
                

            </div>
            <div className="col-lg-9">
                <div className='border border-light-dark rounded p-3' >
                    <div className='row pb-4'>
                        <div className='col'>
                            <input
                            class="form-control" placeholder="First name"
                            />
                            
                        </div>
                        <div className='col'>
                            <input
                            class="form-control" placeholder="Last name"
                            />
                            
                        </div>

                    </div>
                    <div className='row px-3 pb-4'>
                         <input
                         class="form-control" placeholder="Email"
                        />
                    </div>
                    <div className='row px-3 pb-4'>
                        <textarea class="form-control "style={{minHeight:"115px", resize:"none"}} id="validationTextarea" placeholder="Message" required ></textarea>

                    </div>
                    <div className="flex flex-reverse">
                        <Button variant="success" className="custom-button-submit">
                           Send
                        </Button>
                    </div>
                    

                </div>
   
            </div>
        </div>
      
    </div>
  )
}

export default ContactSection
