import React from 'react';
import './CenterVideo.css';
import VideoCenter from './VideoCenter.webm'

const CenterVideo = () => {
	return (
		<div id='center-div-main' className='video-container'>
			{/* <iframe
				width='1520'
				height='577'
				src='https://www.youtube.com/embed/-Da8Mf5vg7o'
				title='Website Demo-Video Presentation'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen>
				Play
			</iframe> */}
			<video width='640' height='360' controls autoPlay muted>
				<source src={VideoCenter} type='video/mp4' />
			</video>
		</div>
	);
};

export default CenterVideo;
