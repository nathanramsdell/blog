import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--nav-height', document.getElementById("navbar").offsetHeight + "px");
   }, [])
  
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
