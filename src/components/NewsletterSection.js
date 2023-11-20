import React from 'react'

const NewsletterSection = () => {
    const backgroundImage = 'url("images/NewsLetterSection/newsBg.png")';
    const divStyle = {
        background: backgroundImage,
        backgroundSize: 'cover', // Adjust as needed
       
        // Add other background properties if necessary
        width: '100%', // Adjust the width as needed
        height: '100%', // Adjust the height as needed
  };

  return (
    <div style={divStyle} className="py-4">
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='flex flex-column'>
                        <h3 className='colorWhite'>Subscribe for Newsletter</h3>
                        <p className='colorWhite'>
                        Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio
                        </p>

                    </div>

                </div>
                <div className='col-md-6 pt-4'>
                    <div className='news-letter-btn w-100'>
                        <div className='d-flex flex-row justify-content-between align-items-center text-center'>
                            <p className='gap-p'>
                                Inserisci la tua email
                            </p>
                            <img src="/images/NewsletterSection/newsBtn.svg"></img>
                        </div>
                    </div>
 
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default NewsletterSection
