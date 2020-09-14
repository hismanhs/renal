import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class AreaChart extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Number of Patients"
			},
			axisY: {
				title: "Number of Patients",
				includeZero: false,
			},
			data: [
			{
				type: "area",
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0.##",
				dataPoints: [
					{ x: new Date(2025, 0), y: 7},
					{ x: new Date(2025, 0), y: 7},
					{ x: new Date(2024, 0), y: 6},
					{ x: new Date(2023, 0), y: 5},
					{ x: new Date(2022, 0), y: 4},
					{ x: new Date(2021, 0), y: 3},
					{ x: new Date(2020, 0), y: 3}
				]
			}
			]
		}
		
		return (
		<div>
			<h1>Doctor's Graph</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default AreaChart;                           