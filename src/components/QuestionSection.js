import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

const QuestionSection = () => {

    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const [isOpen3, setIsOpen3] = useState(true);
    const [isOpen4, setIsOpen4] = useState(true);
    const [isOpen5, setIsOpen5] = useState(true);
    const [isOpen6, setIsOpen6] = useState(true);
    const [isOpen7, setIsOpen7] = useState(true);


    const toggleContent1 = () => {
      setIsOpen1(!isOpen1);
    };
    const toggleContent2 = () => {
        setIsOpen2(!isOpen2);
      };
    const toggleContent3 = () => {
        setIsOpen3(!isOpen3);
    };
    const toggleContent4 = () => {
        setIsOpen4(!isOpen4);
    };
    const toggleContent5 = () => {
        setIsOpen5(!isOpen5);
      };
    const toggleContent6 = () => {
        setIsOpen6(!isOpen6);
    };
    const toggleContent7 = () => {
        setIsOpen7(!isOpen7);
    };
  return (
    <div className='container' >
        <div className='flex '> 
        <div className='flex  right flex-column align-items-center '>
            <h2 className='pb-3'>Frequently Asked Questions</h2>
            <hr className='after-line pb-5'/>
        </div>
        <div className='flex  flex-column align-items-center '>
            <h2 className='pb-3'>Frequently Asked Questions</h2>
            <hr className='after-line pb-5'/>
        </div>
        <div className='flex push flex-reverse  align-items-center '>
          <img src='images/QuestionSection/design1.svg'>
          </img>
        </div>
        </div>
        <div className='pb-3'>
            <div className='p-3 shadow-sm rounded'>
                    <div className='flex flex-column'>
                        <div className='flex flex-row'>
                            <span className='font-size me-3' onClick={toggleContent1}>
                                {isOpen1 ? '−' : '+'}
                            </span>
                            <h4>Dove si monta S.I.R.E.?</h4>
                        </div>
                        {isOpen1 && <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra</p>}
                    </div>
             </div>
        </div>
        
        <div className='pb-3'>
            <div className='p-3 shadow-sm rounded'>
                    <div className='flex flex-column'>
                        <div className='flex flex-row'>
                            <span className='font-size me-3' onClick={toggleContent2}>
                                {isOpen2 ? '−' : '+'}
                            </span>
                            <h4>Chi monta l’impianto S.I.R.E.?</h4>
                        </div>
                        {isOpen2 && <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra</p>}
                    </div>
             </div>
        </div>
        <div className='pb-3'>
            <div className='p-3 shadow-sm rounded'>
                    <div className='flex flex-column'>
                        <div className='flex flex-row'>
                            <span className='font-size me-3' onClick={toggleContent3}>
                                {isOpen3 ? '−' : '+'}
                            </span>
                            <h4>Quanto tempo impiega l’installazione?</h4>
                        </div>
                        {isOpen3 && <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra</p>}
                    </div>
             </div>
        </div>
        
        <div className='pb-3'>
            <div className='p-3 shadow-sm rounded'>
                    <div className='flex flex-column'>
                        <div className='flex flex-row'>
                            <span className='font-size me-3' onClick={toggleContent4}>
                                {isOpen4 ? '−' : '+'}
                            </span>
                            <h4>E’ necessario richiedere autorizzazioni al condominio?</h4>
                        </div>
                        {isOpen4 && <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra</p>}
                    </div>
             </div>
        </div>

        <div className='pb-3'>
            <div className='p-3 shadow-sm rounded'>
                    <div className='flex flex-column'>
                        <div className='flex flex-row'>
                            <span className='font-size me-3' onClick={toggleContent5}>
                                {isOpen5 ? '−' : '+'}
                            </span>
                            <h4>E’ necessario predisporre pratiche per il GSE? </h4>
                        </div>
                        {isOpen5 && <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra</p>}
                    </div>
             </div>
        </div>
        <div className='pb-3'>
            <div className='p-3 shadow-sm rounded'>
                    <div className='flex flex-column'>
                        <div className='flex flex-row'>
                            <span className='font-size me-3' onClick={toggleContent6}>
                                {isOpen6 ? '−' : '+'}
                            </span>
                            <h4>L’impianto è garantito?</h4>
                        </div>
                        {isOpen6 && <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra</p>}
                    </div>
             </div>
        </div>
        
        <div className='pb-3'>
            <div className='p-3 shadow-sm rounded'>
                    <div className='flex flex-column'>
                        <div className='flex flex-row'>
                            <span className='font-size me-3' onClick={toggleContent7}>
                                {isOpen7 ? '−' : '+'}
                            </span>
                            <h4>E’ possibile usufruire di bonus fiscali?</h4>
                        </div>
                        {isOpen7 && <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra</p>}
                    </div>
             </div>
        </div>
        <div className='flex justify-content-center py-4'>
        
        <Button variant="success" className="custom-button">
            Collegati al sole
        </Button>
      

  </div>
       
       
        
        
        

      
    </div>
  )
}

export default QuestionSection
