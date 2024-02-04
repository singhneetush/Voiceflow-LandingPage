import React from 'react';
import CenterDiv from './CenterDiv';
import CenterToggle from './CenterToggle';
import CenterVideo from './CenterVideo';
import Footer from './Footer';
import NavBar from './NavBar';
import TopNav from './TopNav';
import Vodafone from './Vodafone';


function App() {
	return (
		<div className='app'>
			
			<TopNav />
			<NavBar />
			<CenterDiv />
			<CenterVideo />
			<CenterToggle />
			<Vodafone />
			<Footer />
		</div>
	);
}

export default App;
