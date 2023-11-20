import React from 'react'
import Footer from './components/Footer/Footer'
import './index.css';

import Header from './components/Header/Header';

import NewsletterSection from './components/NewsletterSection';
import MainSection from './components/MainSection';
import FoundersSection from './components/FoundersSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ProductSection from './components/ProductSection';
import ServicesSection from './components/ServicesSection';
import PlanSection from './components/PlanSection';
import QuestionSection from './components/QuestionSection';
import ContactSection from './components/ContactSection';
import { Helmet } from 'react-helmet';



const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>S.I.R.E</title>
        <meta name="description" content="Come in and get your expenses cut by using renewable source SIRE." />
        
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your page description" />
        <meta property="og:image" content="URL to your image" />
        <meta property="og:url" content="URL to your page" />
        
        {/* -----------------------------twitter---------------------------- */}
        
        <meta name="twitter:title" content="Your Page Title" />
        <meta name="twitter:description" content="Your page description" />
        <meta name="twitter:image" content="URL to your image" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* -----------------------------SEO---------------------------- */}

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="/favicon.svg" />


      </Helmet>
     <Header/>
      <main style={{minHeight:"93vh"}}>
        <MainSection/>
        <div className="section-gap"></div>
        <FoundersSection/>
        <div className="section-gap"></div>
        <AboutSection/>
        <div className="section-gap"></div>
        <FeaturesSection/>
        <div className="section-gap"></div>
        <ProductSection/>
        <div className="section-gap"></div>
        {/* <SixthSection/> */}
        <ServicesSection/>
        <div className="section-gap"></div>
        <PlanSection/>
        <div className="section-gap"></div>
        <QuestionSection/>
        <div className="section-gap"></div>
        <ContactSection/>
        <div className="section-gap"></div>
        <NewsletterSection/>

       
      </main>
     <Footer/>
    </div>
  )
}

export default App
