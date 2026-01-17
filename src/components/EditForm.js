import { DropDown } from "./DropDown";

export function EditForm({
	ele,
	editTask,
	setEditTask,
	setEditId,
	task,
	setTask,
	userPriority,
	setUserPriority,
}) {
	function handleEdit(id) {
		const updatedTasks = task.map((ele) => {
			if (ele.id === id) {
				return {
					...ele,
					name: editTask,
					priority: userPriority || ele.priority,
				};
			}
			return ele;
		});
		setTask(updatedTasks);
		setEditId(null);
	}
	return (
		<div>
			<input
				value={editTask}
				autoFocus={true}
				onChange={(e) => {
					setEditTask(e.target.value);
				}}
			/>
			<DropDown setUserPriority={setUserPriority} />
			<button onClick={() => handleEdit(ele.id)}>✅</button>
			<button onClick={() => setEditId(null)}>❌</button>
		</div>
	);
}
