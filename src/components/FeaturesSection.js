import React from 'react'

const FeaturesSection = () => {
    const backgroundImage = 'url("images/FeaturesSection/backgroundPattern.png")';
    const divStyle = {
        background: backgroundImage,
        backgroundSize: 'cover', // Adjust as needed
       
        // Add other background properties if necessary
        width: '100%', // Adjust the width as needed
        height: '100%', // Adjust the height as needed
  };
  return (
    <div style={divStyle}>
        <div className="container">
        <div className='flex  flex-column  align-items-center '>
            <h2 className='pb-3'>Connesso, Intelligente, Resistente </h2>
            <hr className='after-line pb-3'/>
        </div>
        <div>
            <div class="row">
                <div class="col-md-6 flex flex-row align-items-start">
                    <div className='me-3'>
                        <img src="images/FeaturesSection/Versatile.svg"/>

                    </div>
                    <div className='flex flex-column'>
                        <h4>Versatile</h4>
                        <p>Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare</p>

                    </div>

                </div>
                <div class="col-md-6 flex flex-row align-items-start">
                    <div className='me-3'>
                        <img src="images/FeaturesSection/IndiGreen.svg"/>

                    </div>
                    <div className='flex flex-column'>
                        <h4>Indipendente e Green</h4>
                        <p>dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà.</p>

                    </div>

                </div>
                
            </div>
            <div class="row">
                <div class="col-md-6 flex flex-row align-items-start">
                    <div className='me-3'>
                        <img src="images/FeaturesSection/Auto.svg"/>

                    </div>
                    <div className='flex flex-column'>
                        <h4>Automatizzato</h4>
                        <p>Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l'esposizione in base alle condizioni atmosferiche. 
                        </p>

                    </div>

                </div>
                <div class="col-md-6 flex flex-row align-items-start">
                    <div className='me-3'>
                        <img src="images/FeaturesSection/Coneesa.svg"/>

                    </div>
                    <div className='flex flex-column'>
                        <h4>Connesso</h4>
                        <p>Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta.</p>

                    </div>

                </div>
                
            </div>
            <div class="row">
            <div class="col-md-6 flex flex-row align-items-start">
                    <div className='me-3'>
                        <img src="images/FeaturesSection/Effec.svg"/>

                    </div>
                    <div className='flex flex-column'>
                        <h4>Efficiente</h4>
                        <p>Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose.</p>

                    </div>

                </div>
                <div class="col-md-6 flex flex-row align-items-start">
                    <div className='me-3'>
                        <img src="images/FeaturesSection/Resistant.svg"/>

                    </div>
                    <div className='flex flex-column'>
                        <h4>Resistente</h4>
                        <p>Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi.</p>

                    </div>

                </div>
                
            </div>
    
   
        </div>
       

        </div>
    </div>
  )
}

export default FeaturesSection
