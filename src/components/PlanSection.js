import React from 'react'
import { Button } from 'react-bootstrap';
const PlanSection = () => {
    const backgroundImage = 'url("images/PlanSection/seventhBg.png")';
    const divStyle = {
        background: backgroundImage,
        backgroundSize: 'cover', // Adjust as needed
       
        // Add other background properties if necessary
        width: '100%', // Adjust the width as needed
        height: '100%', // Adjust the height as needed
  };
  return (
    <div style={divStyle} className='py-5'>
      <div className='container'>
        <div className='flex  flex-column  align-items-center '>
            <h2 className='pb-3'>Connettiti al sole anche tu</h2>
            <hr className='after-line pb-5'/>
        </div>
        <div className='row pb-5'>
            <div className='col grid-seventh-1 me-3'>
                <div className='grid-inner'>
                <div className='flex justify-center pb-3'>
                    <img src="/images/PlanSection/dollar.svg"/>

                </div>
                <div className='flex text-center justify-center pb-3'>
                    <h4>Richiedi un Preventivo</h4>

                </div>
                <div className='flex text-center justify-center'>
                    <p>Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze ditilizzn</p>

                </div>

                </div>
                

            </div>
            <div className='col grid-seventh-2 me-3'>
                <div className='grid-inner'>
                <div className='flex justify-center pb-3'>
                    <img src="/images/PlanSection/catalyst.svg"/>

                </div>
                <div className='flex text-center justify-center pb-3'>
                    <h4>Verifica la compatibilitâ</h4>

                </div>
                <div className='flex text-center justify-center'>
                    <p>Verifica immediata della necessitâ tecniche di installazione</p>

                </div>

                </div>
                

            </div>
            <div className='col grid-seventh-3 me-3'>
                <div className='grid-inner'>
                <div className='flex justify-center pb-3'>
                    <img src="/images/PlanSection/settings.svg"/>

                </div>
                <div className='flex text-center justify-center pb-3'>
                    <h4>Installazione</h4>

                </div>
                <div className='flex text-center justify-center'>
                    <p>Un instalIatore qualificato Solar Innovatio posizionerâ il SIRE in massimo 2 ore</p>

                </div>

                </div>
                

            </div>
            <div className='col grid-seventh-4 '>
                <div className='grid-inner'>
                <div className='flex justify-center pb-3'>
                    <img src="/images/PlanSection/sun.svg"/>

                </div>
                <div className='flex text-center justify-center pb-3'>
                    <h4>Enjoy your Sun Power</h4>

                </div>
                <div className='flex text-center justify-center'>
                    <p>Connettiti alla APP e  goditi la tua energia  solare</p>

                </div>

                </div>
                

            </div>
        </div>
        <div className='flex justify-content-center'>
        
              <Button variant="success" className="custom-button">
              Collegati al sole
              </Button>
            

        </div>

      </div>
    </div>
  )
}

export default PlanSection
