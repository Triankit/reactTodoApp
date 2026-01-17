export function Header({ setSearchTerm }) {
	return (
		<div
			style={{
				flex: 1,
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				display: "flex",
				padding: 16,
			}}
		>
			<div>
				<h1>To do App</h1>
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
				<input
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder='Search'
				/>
				<button style={{ border: 0, backgroundColor: "white" }}>🔍</button>
			</div>
		</div>
	);
}
