import { Button ,Box,Typography} from "@mui/material";
import React, {createContext} from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import './Navbar.css'

export const TimeTracker = () => {
return (
	<div className="events">
	<h1>List View</h1>
	</div>
);
};

export const EventsOne = () => {
return (
	<div className="events">
	<h1> Event1</h1>
	</div>
);
};
const Name = createContext();
export const Project = () => {
return (
	<div className="project">
		 <Name.Provider value={'Projects'}>
        <Navbar/>
		<Link  to = '/addProject' ><Button variant="contained">+ Add Project</Button></Link>
        </Name.Provider>
	
		<Box sx={{ p: '10px 0px' }}>


    <Typography align='center'>
	
	<h1>Add Project</h1>
	
    </Typography>
</Box>


	</div>
);
};
export {Name};