import React, { useContext } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import UserProvider from '../providers/UserProvider'
import { Link } from 'react-router-dom';

const Header = () => {

	const { userContext, setUserContext } = useContext(UserProvider);

	const handleLogOut = () => {
		setUserContext(null);
	}

	return (
		<header id="header">
			<Grid container direction="row" justify="center" alignItems="stretch" spacing={3}>
				<Grid item>
					<div id="text-logo" style={{ cursor: "pointer" }}>
						<Link to="/" replace style={{ textDecoration: "none", fontSize: "20pt", color: "black", padding: "3px 5px 3px 5px" }}>Youtube Downloader</Link>
					</div>
				</Grid>
				<Grid item md={3} xs={3} lg={3}></Grid>
				{userContext ? <Grid align="right" item>
					<Link to="/downloader" replace style={{ textDecoration: "none", fontSize: "15pt",textAlign: "right", color: "black", padding: "3px 5px 3px 5px" }}>Downloader </Link>
				</Grid> : <div></div>}
				<Grid item>
					{userContext ?
						(<Button variant="contained" color="primary" onClick={handleLogOut} size="small">Logout</Button>) :
						<Button variant="contained" color="primary" size="small" href="/login">Login</Button>}
				</Grid>
				{userContext ?
					<h3>Welcome, {userContext}</h3> : <div></div>}
			</Grid>
		</header>
	)
}

export default Header