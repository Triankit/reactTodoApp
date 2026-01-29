import { useState } from "react";
export function Header({ setSearchTerm, user, onLogout }) {
	const [searchInput, setSearchInput] = useState("");

	const handleSearchChange = (e) => {
		const value = e.target.value;
		setSearchInput(value);
		setSearchTerm(value);
	};

	const handleLogout = () => {
		if (onLogout) {
			onLogout();
		}
	};

	return (
		<div style={styles.container}>
			<div style={styles.logoContainer}>
				<label style={styles.logo}>To-Do List Dashboard</label>
			</div>

			<div style={styles.searchContainer}>
				<input
					value={searchInput}
					onChange={handleSearchChange}
					placeholder='Search tasks...'
					style={styles.searchInput}
				/>
				<button style={styles.searchButton}>🔍</button>
			</div>

			<div style={styles.userContainer}>
				{user && (
					<>
						<div style={styles.welcomeText}>
							Welcome, <strong>{user.name}</strong>!
						</div>
						<button onClick={handleLogout} style={styles.logoutButton}>
							Logout
						</button>
					</>
				)}
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 20px",
		backgroundColor: "#f8f9fa",
		borderBottom: "1px solid #dee2e6",
	},
	logoContainer: {
		flex: 1,
	},
	logo: {
		fontSize: "20px",
		fontWeight: "bold",
		color: "#333",
	},
	searchContainer: {
		flex: 2,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	searchInput: {
		padding: "8px 12px",
		fontSize: "14px",
		border: "1px solid #ced4da",
		borderRadius: "4px 0 0 4px",
		width: "300px",
	},
	searchButton: {
		padding: "8px 12px",
		fontSize: "14px",
		backgroundColor: "#007bff",
		color: "white",
		border: "1px solid #007bff",
		borderRadius: "0 4px 4px 0",
		cursor: "pointer",
	},
	userContainer: {
		flex: 1,
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: "15px",
	},
	welcomeText: {
		fontSize: "14px",
		color: "#495057",
	},
	logoutButton: {
		padding: "6px 12px",
		fontSize: "14px",
		backgroundColor: "#dc3545",
		color: "white",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
	},
};
