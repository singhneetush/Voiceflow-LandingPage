import React from 'react';
import './Vodafone.css';
import photo1 from './photo1.png';

const Vodafone = ({ item }) => {
	return (
		<div className='vodafone-main-container-div'>
			<div className='Screenshot1'>
				<img src={photo1}></img>
			</div>
			<div className='build-page'>
				<h1 className='text-1'>BUILD</h1>
				<h2>
					Build chatbots <br /> that scale, easily
				</h2>
				<p>
					Voiceflow is world's most advanced agent design platform - allowing
					teams of any size to build agents of any scale and complexity, easily.
				</p>
				<a
					href='/agent-build-tool'
					style={{ textDecoration: 'none' }}
					className='vodafone-button'>
					Agent build tool <span>→</span>
				</a>
				<h3 style={{ color: 'red' }}>vodafone</h3>
				<p style={{ fontSize: '15px' }}>
					“Voiceflow has made creating conversation dialogue journeys easy and
					smooth. It has facilitated the collaboration and best practice sharing
					between people across different teams and countries.”
				</p>
				<div className='image-container'>
					<img src='#' alt='image' />
					<div className='author'>
						Illaria Di Donfrancesco <br />
						Product Owner - AI Platforms
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vodafone;
