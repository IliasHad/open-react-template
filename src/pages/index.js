import { Link } from "gatsby"
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import ScrollReveal from '../utils/ScrollReveal';
import React, { useRef, useEffect } from 'react';
import Layout from '../layouts/LayoutDefault';
import '../assets/scss/style.scss';

const IndexPage = () => {

  
  const childRef = useRef();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();

  }, []);

  return (
    
       <ScrollReveal
      ref={childRef}
      children={() => (
        <Layout>
        <Hero className="illustration-section-01" />
        <FeaturesTiles />
        <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
        <Testimonial topDivider />
        <Cta split />
        </Layout>
      )} />
      
    
    );
  
}


export default IndexPage
