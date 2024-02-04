import React, { useState } from 'react';
import './CenterToggle.css';

const ChildComponent = ({ onClick }) => {
	return (
		<>
			<h1 onClick={onClick}>hello</h1>
		</>
	);
};

const ModalComponent = () => {
	return (
		<>
			<div>
				<h3>modal</h3>
			</div>
		</>
	);
};

const CenterToggle = () => {
	const [showModal, setShowModal] = useState(false);

	const handleChildClick = () => {
		setShowModal(true);
	};

	return (
		<div>
			{/* <ChildComponent onClick={handleChildClick} />
            {showModal && <ModalComponent />} */}
			{/* <h1>newwwwwwwwwwwwwwwww</h1> */}
			<div className='center-toggle-text'>Why Voiceflow ? </div>
			<div className='text'>
				Trusted by <b> 150,000+ </b> people and teams building agents across
				every channel and use case
			</div>
		</div>
	);
};

export default CenterToggle;
