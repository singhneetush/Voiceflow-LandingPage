import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<React.Fragment>
			<div className='footer'>
				<div className='footer-links'>
					<div className='footer-link' id='voiceflow-banner'>
						Voiceflow
					</div>
					<div className='footer-link'>Youtube</div>
					<div className='footer-link'>Linkedin</div>

					<div className='footer-link'>Discord</div>
					<div className='footer-link'>GitHub</div>
					<div className='footer-link'>Twitter</div>
				</div>
				<div className='footer-links'>
					<div className='footer-link footer-link-header'>Product</div>
					<div className='footer-link'>Youtube</div>
					<div className='footer-link'>Linkedin</div>

					<div className='footer-link'>Discord</div>
					<div className='footer-link'>GitHub</div>
					<div className='footer-link'>Twitter</div>
				</div>
				<div className='footer-links'>
					<div className='footer-link footer-link-header'>Resources</div>
					<div className='footer-link'>Youtube</div>
					<div className='footer-link'>Linkedin</div>

					<div className='footer-link'>Discord</div>
					<div className='footer-link'>GitHub</div>
					<div className='footer-link'>Twitter</div>
				</div>
				<div className='footer-links'>
					<div className='footer-link footer-link-header'>Enterprise</div>
					<div className='footer-link'>Youtube</div>
					<div className='footer-link'>Linkedin</div>

					<div className='footer-link'>Discord</div>
					<div className='footer-link'>GitHub</div>
					<div className='footer-link'>Twitter</div>
				</div>
				<div className='footer-links'>
					<div className='footer-link footer-link-header'>Company</div>
					<div className='footer-link'>Youtube</div>
					<div className='footer-link'>Linkedin</div>

					<div className='footer-link'>Discord</div>
					<div className='footer-link'>GitHub</div>
					<div className='footer-link'>Twitter</div>
				</div>
			</div>
			<div className='footer-copyright'>
				<p>&copy; 2022 Voiceflow. All rights reserved.</p>
			</div>
		</React.Fragment>
	);
};

export default Footer;
