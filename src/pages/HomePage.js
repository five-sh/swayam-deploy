import React from 'react'
import Events from './../components/HomePage/Events';
import Gallery from '../components/HomePage/Galler';
import Footer from './../components/HomePage/Footer';
import Start from './../components/HomePage/Start';

const HomePage = () =>{
  return (
    <>
        <Start/>
        <Events/>
        <Gallery/>
        <Footer/>
    </>
    
  )
}

export default HomePage