import React from 'react';

const HoverableMenu = ({ title, description }) => {
	return (
		<div className='hoverable-menu'>
			<div className='card-title'>{title}</div>
			<p className='card-text'>{description}</p>
		</div>
	);
};

export default HoverableMenu;