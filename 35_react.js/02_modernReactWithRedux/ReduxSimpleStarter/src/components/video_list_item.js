import React from 'react';

// ES6:
// - use object destructuring to access 'props.video' directly
const VideoListItem = ({video}) => {
	const title = video.snippet.title;
	const imgUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item">
			<div className="video-list media">
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