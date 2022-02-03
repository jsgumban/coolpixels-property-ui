import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../store/properties/details/actions";
import moment from 'moment';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { number } from "yup";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PropertiesChart = ( { selectedProperty } ) => {
	const dispatch = useDispatch();
	const [ chartData, setChartData ] = useState({});
	
	// fetch specific property details upon selection
	useEffect(() => {
		if (selectedProperty) {
			dispatch(getDetails(selectedProperty));
		}
	}, [ selectedProperty ]);
	
	const { details } = useSelector(state => ({
		details: state.details.details
	}));
	
	// set chart data upon selection of property
	useEffect(() => {
		const incomesLabel = details.incomes && details.incomes.map(( property ) => moment().month(property.month - 1).format('MMMM'));
		const expensesValues = details.expenses && details.expenses.map(( property ) => property.value);
		const incomesValues = details.incomes && details.incomes.map(( property ) => property.value);
		
		const data = {
			labels: incomesLabel, datasets: [
				{
					label: 'Income', data: incomesValues, backgroundColor: 'pink'
				},
				{
					label: 'Expense', data: expensesValues, backgroundColor: 'blue'
				}
			],
		};
		
		setChartData(data);
	}, [ details ])
	
	
	// chart default options
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true, text: 'Properties Income and Expenses',
			},
		},
	};
	
	return (<div>
			{chartData.datasets && chartData.labels && <Bar options={options} data={chartData}/>}
		</div>);
};

PropertiesChart.propTypes = {
	selectedProperty: number,
};

export default PropertiesChart;
