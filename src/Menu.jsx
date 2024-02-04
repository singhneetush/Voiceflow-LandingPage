import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 16px;
	width: 100%;
	max-width: 300px;
`;

const CardTitle = styled.h3`
	color: #333;
	font-size: 20px;
	margin: 0;
`;

const CardDescription = styled.p`
	color: #666;
	font-size: 14px;
	margin: 0;
`;

const Card = ({ title, description }) => {
	return (
		<CardContainer>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardContainer>
	);
};

export default Card;
