import React from 'react';
import './NavBar.css';

const NavBar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-brand'>
				<div className='voiceflow-logo'>Voiceflow</div>
			</div>
			<div className='navbar-menu' style={{ marginTop: '6px' }}>
				<div className='navbar-start'>
					<a href='#' className='navbar-start-item'>
						Product
					</a>
					<a href='#' className='navbar-start-item'>
						Community
					</a>
					<a href='#' className='navbar-start-item'>
						Docs
					</a>
					<a href='#' className='navbar-start-item'>
						Templates
					</a>
					<a href='#' className='navbar-start-item'>
						Enterprise
					</a>
					<a href='#' className='navbar-start-item'>
						Pricing
					</a>
				</div>
			</div>
			<div className='navbar-end'>
				<div className='navbar-item'>
					<div className='buttons'>
						<a href='#' className='button is-primary'>
							Login
						</a>
						<a href='#' className='button is-green'>
							Get started
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
