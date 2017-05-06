import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

function highest(data) {
	return _.round(Math.max.apply(null, data));
}

function lowest(data) {
	return _.round(Math.min.apply(null, data));
}

export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data} >
				<SparklinesLine color={props.color} style={{ fill: "none" }}  />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			{console.log(props.data)}
			<div>Høyeste: {highest(props.data)} {props.units}</div>
			<div>Laveste: {lowest(props.data)} {props.units}</div>
			<div>Gjennomsnitt: {average(props.data)} {props.units}</div>
		</div>
	);
}