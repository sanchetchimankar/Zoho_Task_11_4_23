import { Button, FilledInput, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, NativeSelect, Paper, Select, TextareaAutosize, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../Navbar";




// const formLabelsTheme = createMuiTheme({
// 	overrides: {
// 		MuiFormLabel: {
// 			asterisk: {
// 				color: "#db3131",
// 				"&$error": {
// 					color: "#db3131"
// 				}
// 			}
// 		}
// 	}
// });


const AddProject = () => {

	const [text, setText] = React.useState("");

    const handleChange = event => {
        setText(event.target.value);
    };
	return (

		<div className="App">
			
			<h4 >Project Configuration Details</h4>
			<Paper
				sx={{
					p: 2,
					margin: 'auto',
					maxWidth: 1000,
					flexGrow: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
				}}
			><br/>
				<Grid container spacing={2}>
				&nbsp;&nbsp;&nbsp;	<TextField
						id="standard-basic"
						required
						variant="standard"
						label="Project Name"
						inputProps={{
							style: {
								width: "900px",
							},
						}}
					/>
				</Grid><br /><br />

				<Grid container spacing={2}>
				&nbsp;&nbsp;&nbsp;	<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel variant="standard" htmlFor="uncontrolled-native">
								Client Name
							</InputLabel>
							<NativeSelect
								defaultValue={30}
								inputProps={{
									name: 'name',
									id: 'uncontrolled-native',
									style: {
										width: "900px",
									},
								}}
							>
								<option value={10}>Select</option>
								<option value={20}>Ten</option>
								<option value={30}>Twenty</option>
								<option value={40}>Thirty</option>
							</NativeSelect>
						</FormControl>
					</Box>
				</Grid><br /><br />
				<Grid container spacing={2}>
				&nbsp;&nbsp;&nbsp;	<TextField
						id="standard-basic"
						type="number"
						variant="standard"
						label="Project Cost"
						inputProps={{
							style: {
								width: "900px",
							},
						}}
					/>
				</Grid><br/><br/>
				<Grid container spacing={2}>
				&nbsp;&nbsp;&nbsp;	<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel variant="standard" htmlFor="uncontrolled-native">
								Proeject Head
							</InputLabel>
							<NativeSelect
								defaultValue={30}
								inputProps={{
									name: 'name',
									id: 'uncontrolled-native',
									style: {
										width: "900px",
									},
								}}
							>
								<option value={10}>Select</option>
								<option value={10}>Supriya Lokhande E211202</option>
								<option value={20}>Twenty</option>
								<option value={30}>Thirty</option>
							</NativeSelect>
						
							</FormControl>
						
					</Box>
				</Grid><br/><br/>

				<Grid container spacing={2}>
				&nbsp;&nbsp;&nbsp;	<TextField
						 id="outlined-number"
						type="number"
						variant="standard"
						label="Project Manager"
						inputProps={{
							style: {
								width: "900px",
							},
						}}
					/>


					
				</Grid><br/><br/>

				<Grid container spacing={2}>
				&nbsp;&nbsp;&nbsp;	<TextField
						id="standard-basic"
						type="number"
						variant="standard"
						label="Project Users"
						inputProps={{
							style: {
								width: "900px",
							},
						}}
					/>
				</Grid><br/><br/>
				<Grid container spacing={2}>
				&nbsp;&nbsp;&nbsp;	Description
					<br/>
					<TextareaAutosize
						id="standard-basic"
						type="text"
						variant="standard"
						label="Description"
						inputProps={{
							style: {
								width: "900px",
							},
						}}
					/>
					



				</Grid>


			</Paper>
			<Box >
			<Button variant="contained">Submit</Button>&nbsp;
			<Button variant="outlined">Cancel</Button>
			</Box>
		</div>
	);
};

export default AddProject;
