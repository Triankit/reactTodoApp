export function PrioritySelect({ setUserPriority }) {
	return (
		<select
			defaultValue=''
			style={{ margin: "5px" }}
			onChange={(e) => setUserPriority(e.target.value)}
		>
			<option value='' disabled>
				Select Priority
			</option>
			<option value='high'>High</option>
			<option value='medium'>Medium</option>
			<option value='low'>Low</option>
		</select>
	);
}
