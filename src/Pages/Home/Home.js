import React from 'react';
import Layout from "../../component/Layouts/Layout"
import "../../styles/HomeStyle.css" //for background img style/home-1.jpg in hero_sectoin at Section1.js HomeStyle.css
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  	return (
    	<Layout>
			{/*Fisrt RUN Layout.js page in that Header.js and Footer.js page*/}

      		{/* Home Section1 Hero Banner */}
			<Section1 />

			{/* Home Section2 About */}
			<Section2 />

			{/* Home Section3 menu */}
			<Section3 />

			{/* Home Section4 promotion */}
			<Section4 />

			{/* Home Section5 shop */}
			<Section5 />

			{/* Home Section6 blog_section */}
			<Section6 />

			{/* Home Section7 contact */}
			<Section7 />  
    	</Layout>
  	);
}
export default Home;
