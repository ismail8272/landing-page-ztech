import React from 'react'

const MainSection = () => {
    const backgroundImage = 'url("images/FirstImage.png")';
    const divStyle = {
        background: backgroundImage,
        backgroundSize: 'cover', // Adjust as needed
       
        // Add other background properties if necessary
        width: '100%', // Adjust the width as needed
        height: '600px', // Adjust the height as needed
  };
  return (
    <div style={divStyle} className="d-flex flex-column align-items-center justify-center " >
       <div className="container d-flex flex-column align-items-center">
        <h1 className="colorWhite">Il tuo accesso al sole</h1>
        <p className="colorWhite"> Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto. La tua fonte d'energia, gratuita e sostenibile</p>
        </div>
     
    </div>

  )
}

export default MainSection
