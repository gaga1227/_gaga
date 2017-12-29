import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	if (data && data.length) {
		return _.round(_.sum(data) / data.length);
	} else {
		return 0;
	}
}

// React:
// - only requires functional component: render input data
export default function(props) {
	return (
		<div>
			<Sparklines width={180} height={120} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.unit}</div>
		</div>
	);
};