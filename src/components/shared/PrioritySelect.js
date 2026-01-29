export function PrioritySelect({ setUserPriority, styles }) {
	return (
		<select
			defaultValue=''
			style={styles}
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
