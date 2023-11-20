import React from 'react'
import FounderSectionGrid from './FounderSection/FounderSectionGrid'

const FoundersSection = () => {
  return (
    <div className="container d-flex flex-column align-items-center pt-5">

        <h1 > CHI SIAMO</h1>
        <hr className="after-line" />
        <p className="text-center pt-3">
            Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e realizzazione di sistemi fotovoltaici intelligenti. Solar Innovatio unisce alla decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni fotovoltaiche un approccio ingegneristico, innovativo, digitale alla principale fonte di energia rinnovabile.
        </p>
        <div className="row py-5">
            <FounderSectionGrid
            imgSrc="images/FoundersSection/TC.png"
            heading="Cristian Testoni"
            paragraph="Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica."
            />
            <FounderSectionGrid
            imgSrc="images/FoundersSection/GV.png"
            heading="Francesco Gavioli"
            paragraph="Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici "
            />
             <FounderSectionGrid
            imgSrc="images/FoundersSection/MF.png"
            heading="Massimo Fabi"
            paragraph="Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori"
            />
  
  
        </div>
        <div className='d-flex flex-column items-center' >
            <div className="quote d-flex flex-row align-items-start">
                <img src="images/FoundersSection/First.svg" alt="arrows "className="me-1"></img>
                <h4 className="fst-italic text-center">
                    Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una componente di una soluzione ingegneristica più completa che comprende sensoristiche avanzate e l'integrazione con i sistemi domotici di casa.
                </h4>
                <img src="images/FoundersSection/SecondArrow.svg" alt="arrows "className="me-1"></img>
            </div>
            <div className=" d-flex align-items-center">
               <p className="with-lines color-green">Cristian Testoni</p>
            </div>
        </div>
    </div>
  )
}

export default FoundersSection
