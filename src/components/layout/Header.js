export function Header({ setSearchTerm, user }) {
	return (
		<div
			style={{
				flex: 1,
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				display: "flex",
				padding: "10px 20px",
			}}
		>
			<div>
				<label style={{ fontSize: "20px", fontWeight: "bold" }}>
					To-Do List Dashboard
				</label>
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
				<input
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder='Search'
					style={{ padding: "2px", boxShadow: "2px" }}
				/>
				<button style={{ border: 0, backgroundColor: "white" }}>🔍</button>
				{user && <div>Welcome, {user.name}!</div>}
			</div>
		</div>
	);
}
