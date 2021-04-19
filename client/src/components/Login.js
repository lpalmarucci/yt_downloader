import Header from "./Header"
import React, { useContext, useState } from 'react'
import { Button, TextField, Typography, Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import loginMutation from "./managers/mutations/login";
import UserProvider from "../providers/UserProvider";

//Managing cookies
import Cookies from 'universal-cookie'
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AuthenticationReducer from "../store/reducers/AuthenticationReducer";
const cookie = new Cookies();

const Login = () => {
	const [email, setEmail] = useState("bob@gmail.com");
	const [password, setPassword] = useState("bob");
	const [errorMessage, setErrorMessage] = useState("");

	// const userState = useSelector(state => state.isLoggedIn)
	

	const { setUserContext } = useContext(UserProvider);

	const history = useHistory();

	const handleLoginClick = (e) => {
		e.preventDefault();
		if (email.length === 0 || password.length === 0) {
			setErrorMessage("Valorizzare tutti i campi");
		} else {
			fetch('http://localhost:4000/graphql', {
				credentials: 'include',
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Accept': '*/*'
				},
				body: JSON.stringify({
					query: loginMutation,
					variables: { email: email, password: password }
				})
			}).then(res => res.json()).then(res => {
				console.log(res);
				if (res.data?.login?.accessToken && res.data?.login?.username) {
					setUserContext(res.data.login.username);

					console.log()
				} else {
					if (res.errors && res.errors.length > 0) {
						setErrorMessage(res.errors[0].message);
					}
				}
				history.push('/home');
			});
		}

		console.log("Handle click",)
	}
	var displayErrorMessage = <div></div>;
	if (errorMessage.length > 0) {
		displayErrorMessage = <Alert
			severity="error"
			style={{ "marginTop": "10px" }}>
			{errorMessage}
		</Alert>
	}

	return (
		<div>
			<Header />
			<div style={{ marginTop: "5%" }}>
				<Container component="main" maxWidth="xs">
					<div>
						<Typography component="h1" variant="h5">
							Sign in
                        </Typography>
						<form noValidate method="POST">
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								autoFocus
								onChange={(e) => {setEmail(e.target.value); setErrorMessage("")}}
								value={email}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(e) => { setPassword(e.target.value); setErrorMessage("") }}
								value={password}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								style={{ marginTop: "10px" }}
								onClick={handleLoginClick}
							>
								Sign In
                            </Button>
							{/* Show/Hide error message */}
							{displayErrorMessage}
						</form>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default Login