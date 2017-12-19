import React from 'react';

const VideoDetail = ({video}) => {
	// handle invalid data
	if (!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url} />
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

// export 'VideoDetail' component as default
export default VideoDetail;