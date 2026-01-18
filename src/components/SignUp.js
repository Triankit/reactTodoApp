import { useState } from "react";
import { userData } from "../utils/userData";
import { validateEmail, isUserExist } from "../utils/utility";
import { useNavigate } from "react-router-dom";
export function SignUp() {
	const [user, setUser] = useState(userData);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [warning, setWarning] = useState({
		emailWarning: "",
		passwordWarning: "",
		fieldsWarning: "",
		userExistWarning: "",
	});

	const navigate = useNavigate();
	const handleSignUp = () => {
		if (!username || !password || !email) {
			setWarning({ ...warning, fieldsWarning: "All fields are required" });
			return;
		}
		if (password !== confirmPassword) {
			setWarning({ ...warning, passwordWarning: "Passwords do not match" });
			return;
		}

		if (!validateEmail(email)) {
			setWarning({ ...warning, emailWarning: "Invalid email" });
			return;
		}
		if (isUserExist(email, user)) {
			setWarning({
				...warning,
				userExistWarning: "User with this email already exists",
			});
			return;
		}

		const newUser = {
			id: Date.now(),
			name: username,
			password: password,
			email: email,
		};
		userData.push(newUser);
		setUser(userData);
		setWarning("");
		navigate("/Home");
	};

	return (
		<div style={styles.container}>
			<h1>Sign Up</h1>
			<div style={styles.form}>
				{warning.fieldsWarning && (
					<label style={{ ...styles.label, color: "red" }}>
						{warning.fieldsWarning}
					</label>
				)}
				<label style={styles.label}>Username:</label>
				<input
					style={styles.input}
					type='text'
					placeholder='Enter username'
					onChange={(e) => setUsername(e.target.value)}
					onFocus={() => setWarning("")}
				/>
				<br />
				<label style={styles.label}>Password:</label>
				<input
					style={styles.input}
					type='password'
					placeholder='Enter password'
					onChange={(e) => setPassword(e.target.value)}
					onFocus={() => setWarning("")}
				/>
				<br />
				<label style={styles.label}>Confirm Password:</label>
				<input
					style={styles.input}
					type='password'
					placeholder='Confirm password'
					onChange={(e) => setConfirmPassword(e.target.value)}
					onFocus={() => setWarning("")}
				/>
				{warning.passwordWarning && (
					<label style={{ ...styles.label, color: "red" }}>
						{warning.passwordWarning}
					</label>
				)}
				<br />
				<label style={styles.label}>Email:</label>
				<input
					style={styles.input}
					type='email'
					placeholder='Enter email'
					onChange={(e) => setEmail(e.target.value)}
					onFocus={() => setWarning("")}
				/>
				{warning.emailWarning && (
					<label style={{ ...styles.label, color: "red" }}>
						{warning.emailWarning}
					</label>
				)}
				{warning.userExistWarning && (
					<label style={{ ...styles.label, color: "red" }}>
						{warning.userExistWarning}
					</label>
				)}
				<br />
				<button style={styles.button} onClick={handleSignUp}>
					Sign Up
				</button>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
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
		marginBottom: "5px",
		fontSize: "14px",
	},
	button: {
		padding: "10px",
		fontSize: "16px",
		backgroundColor: "#28a745",
		color: "white",
		border: "none",
		cursor: "pointer",
	},
};
