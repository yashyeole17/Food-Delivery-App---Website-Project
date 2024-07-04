import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './component/Layouts/About';
import Menu from './component/Layouts/Menu';
import Shop from './component/Layouts/Shop';
import Blog from './component/Layouts/Blog';
import Contact from './component/Layouts/Contact';

function App() {
    return (
      	<Router>
      		<Routes>
        		<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={ <About/> } />
				<Route path="/menu" element={ <Menu/> } />
				<Route path="/shop" element={ <Shop/> } />
				<Route path="/blog" element={ <Blog/> } />
				<Route path="/contact" element={ <Contact/> } />
      		</Routes>
    	</Router>
  	);
}
export default App;

