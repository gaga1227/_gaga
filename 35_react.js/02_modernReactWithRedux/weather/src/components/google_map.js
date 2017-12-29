import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

// React:
// - only requires functional component: render input data
export default function(props) {
	return (
		<GoogleMapLoader
			containerElement={ <div style={{ height: '100%' }} /> }
			googleMapElement={ <GoogleMap
				defaultZoom={12}
				defaultCenter={{ lat: props.lat, lng: props.lon }}
			/> }
		/>
	);
};