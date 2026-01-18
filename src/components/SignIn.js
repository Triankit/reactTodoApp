import { useState } from "react";
import { userData } from "../utils/userData";
import { validateUser } from "../utils/utility";
import { Link, useNavigate } from "react-router-dom";
export function SignIn() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [warning, setWarning] = useState({
		fieldsWarning: "",
		invalidUserWarning: "",
		loginMessage: "",
	});

	const handleSignIn = () => {
		if (!user.email || !user.password) {
			setWarning({ ...warning, fieldsWarning: "All fields are required" });
			return;
		}
		if (!validateUser(user, userData)) {
			setWarning({
				...warning,
				invalidUserWarning: "Invalid email or password",
			});
			return;
		}
		if (validateUser(user, userData)) {
			setWarning("");
			navigate("/Home");
		}
	};
	return (
		<div style={styles.container}>
			<div style={styles.form}>
				<label style={styles.heading}>To-Do App</label>
				<label style={styles.label}>Log in to your account</label>
				{warning.fieldsWarning && (
					<label style={styles.warning}>{warning.fieldsWarning}</label>
				)}
				{warning.invalidUserWarning && (
					<label style={styles.warning}>{warning.invalidUserWarning}</label>
				)}
				{warning.loginMessage && (
					<label style={styles.warning}>{warning.loginMessage}</label>
				)}
				<input
					type='text'
					placeholder='Email'
					style={styles.input}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					onFocus={() => setWarning("")}
				/>
				<br />
				<input
					type='password'
					placeholder='Password'
					style={styles.input}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					onFocus={() => setWarning("")}
				/>
				<br />
				<button style={styles.button} onClick={handleSignIn}>
					Sign In
				</button>
				<Link to='/SignUp' style={{ ...styles.footer, textDecoration: "none" }}>
					<label>Don't have an account? Sign up</label>
				</Link>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "50px",
		height: "100vh",
	},
	heading: {
		fontSize: "30px",
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: "20px",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		width: "300px",
	},
	input: {
		marginBottom: "10px",
		padding: "8px",
		fontSize: "16px",
	},
	label: {
		marginBottom: "40px",
		fontSize: "25px",
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		padding: "10px",
		fontSize: "16px",
		backgroundColor: "#28a745",
		color: "white",
		border: "none",
		cursor: "pointer",
	},
	footer: {
		marginTop: "10px",
		fontSize: "14px",
		color: "#888",
		textAlign: "center",
	},
	warning: {
		color: "red",
		fontSize: "14px",
		marginBottom: "10px",
	},
};
