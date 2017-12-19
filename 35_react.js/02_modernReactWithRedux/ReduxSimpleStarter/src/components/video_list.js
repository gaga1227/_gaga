import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	// React:
	// - use map() to convert data array to react element array for rendering
	// - adding key attr as unique identifier
	// - key has to be added onto component, not '<li>'
	// - passing down video item click event handler from 'App' to 'VideoListItem'
	const videoItems = props.videos.map(video => {
		return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />
	});

	return (
		<ul className="list-group">
			{videoItems}
		</ul>
	);
};

// export 'VideoList' component as default
export default VideoList;