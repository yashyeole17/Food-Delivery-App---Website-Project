import React from 'react'
import Header from './Header'
//import About from './About'
import Footer from './Footer'

function Layout({ children }) {
    return (
      	<>
          	<Header />
          	<div> {children} </div>
		{/* <About />*/}	
			<Footer/>
    	</>
  	)
}
export default Layout;