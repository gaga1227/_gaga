import React from 'react'

const VideoListItem = (props) => {
	const video = props.video;
	const title = video.snippet.title;

	return (
		<li>{title}</li>
	);
};

// export 'VideoListItem' component as default
export default VideoListItem