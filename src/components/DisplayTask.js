export function DisplayTask({ ele, task, setTask, setEditId, setEditTask }) {
	function handleCheckboxChange(id) {
		const newTasks = task.map((taskItem) => {
			if (taskItem.id === id) {
				return {
					...taskItem,
					status: taskItem.status === "complete" ? "incomplete" : "complete",
				};
			}
			return taskItem;
		});
		setTask(newTasks);
	}

	function toogleEdit(id) {
		setEditId(id);
		const foundTask = task.find((ele) => ele.id === id);
		if (foundTask) {
			setEditTask(foundTask.name);
		}
	}

	function handleDelete(id) {
		const filterArray = task.filter((ele) => {
			return ele.id !== id;
		});
		setTask(filterArray);
	}
	return (
		<>
			<input
				type='checkbox'
				checked={ele.status === "complete"}
				onChange={() => {
					handleCheckboxChange(ele.id);
				}}
			/>
			<label
				style={{
					textDecoration: ele.status === "complete" ? "line-through" : "",
				}}
			>
				{ele.name} [{ele.priority}] - Due: {ele.dueDate.toLocaleDateString()}
			</label>
			<button onClick={() => toogleEdit(ele.id)} style={{ marginLeft: "5px" }}>
				✍🏻
			</button>
			<button
				onClick={() => handleDelete(ele.id)}
				style={{ marginLeft: "5px" }}
			>
				🗑
			</button>
		</>
	);
}
