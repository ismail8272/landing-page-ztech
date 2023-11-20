import React from 'react'

const ProductSection = () => {
  return (
    <>
        <div className='container'>
        <div className='flex  flex-column  align-items-center '>
            <h2 className='pb-3'>Perchè S.I.R.E. </h2>
            <hr className='after-line pb-5'/>
        </div>
        <div className='row pb-4'>
            <div className='grid-services col  me-3'>
                <div className='flex justify-center pb-3'>
                    <img src="/images/ProductSection/Energy.svg"/>

                </div>
                <div className='flex text-center justify-center pb-3'>
                    <h4>Risparmio Energetico</h4>

                </div>
                <div className='flex text-center justify-center'>
                    <p>Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore. </p>

                </div>

            </div>
            <div className='grid-services col  me-3'>
                <div className='flex justify-center pb-3'>
                    <img src="/images/ProductSection/Electric.svg"/>

                </div>
                <div className='flex text-center justify-center pb-3'>
                    <h4>Mobilità Elettrica</h4>

                </div>
                <div className='flex text-center justify-center'>
                    <p>L'unica soluzione che rende l’utilizzo di un’auto elettrica veramente economico.  L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.</p>

                </div>

            </div>
            <div className='grid-services col  me-3'>
                <div className='flex justify-center pb-3'>
                    <img src="/images/ProductSection/Lightning.svg"/>

                </div>
                <div className='flex text-center justify-center pb-3'>
                    <h4>Comunità Energetica</h4>

                </div>
                <div className='flex text-center justify-center'>
                    <p>Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.</p>

                </div>

            </div>

        </div>

      
        </div>
        <div style={{backgroundColor:"#F9F9F9", padding:"20px 0px"}}>
            <div className='container'>
                <div className="row me-4">
                    <div className='grid-services-next col me-3'>
                        <div className='flex justify-center pb-3'>
                            <img src='/images/ProductSection/umbrella.svg'></img>
                        </div>
                        <div className='flex justify-center'>
                            <h5> 110%</h5>
                        </div>
                        <div className='flex text-center justify-center text-uppercase'>
                            <p>Superbonus</p>
                        </div>
                    </div>
                    <div className='grid-services-next col me-3'>
                        <div className='flex justify-center pb-3'>
                            <img src='/images/ProductSection/battery.svg'></img>
                        </div>
                        <div className='flex justify-center'>
                            <h5> 65%</h5>
                        </div>
                        <div className='flex text-center justify-center text-uppercase'>
                            <p>Detrazione DOMOTICA</p>
                        </div>
                    </div>
                    <div className='grid-services-next col me-3'>
                        <div className='flex justify-center pb-5'>
                            <img src='/images/ProductSection/umbrella.svg'></img>
                        </div>
                        <div className='flex justify-center text-uppercase'>
                            <p className='text-center'> Progettazione personalizzata</p>
                            
                        </div>
                        
                    </div>
                    <div className='grid-services-next col me-3'>
                        <div className='flex justify-center pb-5'>
                            <img src='/images/ProductSection/leaf.svg'></img>
                        </div>
                       
                        <div className='flex text-center justify-center text-uppercase'>
                            <p>consulenza fiscale sui bonus</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default ProductSection
