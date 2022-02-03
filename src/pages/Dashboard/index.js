import * as React from 'react';
import { Box, Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getList } from "../../store/properties/list/actions";
import PropertiesChart from "./PropertiesChart";

const Dashboard = props => {
	const dispatch = useDispatch();
	const [ selectedProperty, setSelectedProperty ] = useState('');
	
	// fetch all properties
	useEffect(() => {
		dispatch(getList());
	}, [ getList ]);
	
	const { list } = useSelector(state => ({
		list: state.list.list
	}));
	
	const handleChange = ( event ) => {
		setSelectedProperty(event.target.value);
	}
	
	return (<React.Fragment>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Select property</InputLabel>
					<Select value={selectedProperty} onChange={handleChange} label="Select Property">
						{list.length && list.map(( property ) => {
							return (<MenuItem key={property.id} value={property.id}>{property.name}</MenuItem>)
						})};
					</Select>
				</FormControl>
				<PropertiesChart selectedProperty={selectedProperty}/>
			</Box>
		</React.Fragment>);
};

export default Dashboard;