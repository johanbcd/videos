import React from 'react'
/**importo partes fijas del proyecto */
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) =>(
    <>
        <Header/>
        {children}
        <Footer/>

    </>
)
export default Layout;