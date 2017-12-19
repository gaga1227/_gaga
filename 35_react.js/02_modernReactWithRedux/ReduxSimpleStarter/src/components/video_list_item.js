import React from 'react';

// ES6:
// - use object destructuring to access 'props.video' and 'props.onVideoSelect' directly
const VideoListItem = ({video, onVideoSelect}) => {
	const title = video.snippet.title;
	const imgUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item" onClick={() => onVideoSelect(video)}>
			<div className="video-item media">
				<div className="media-left">
					<img className="media-object" src={imgUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{title}</div>
				</div>
			</div>
		</li>
	);
};

// export 'VideoListItem' component as default
export default VideoListItem;