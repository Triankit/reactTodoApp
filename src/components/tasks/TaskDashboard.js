import { remainingTaskTodo } from "../../utils/utility";
import { filterByComplete } from "../../utils/utility";
import { filterByIncomplete } from "../../utils/utility";
export function TaskDashboard({ task, setFilteredTasks }) {
	function handleFilterComplete() {
		const completedTasks = filterByComplete(task);
		setFilteredTasks(completedTasks);
	}

	function handleFilterIncomplete() {
		const incompleteTasks = filterByIncomplete(task);
		setFilteredTasks(incompleteTasks);
	}

	function handleFilterAll() {
		setFilteredTasks(task);
	}

	return (
		<div style={styles.summaryContainer}>
			<h3>Task Summary</h3>
			<button style={styles.button} onClick={handleFilterComplete}>
				Task Complete: {task.length - remainingTaskTodo(task)}/{task.length}
			</button>
			<button style={styles.button} onClick={handleFilterIncomplete}>
				Remaining Tasks: {remainingTaskTodo(task)}/{task.length}
			</button>
			<button style={styles.button} onClick={handleFilterAll}>
				Total Tasks: {task.length}
			</button>
		</div>
	);
}

const styles = {
	summaryContainer: {
		border: "1px solid #ccc",
		padding: "10px",
		marginBottom: "10px",
	},
	button: {
		marginRight: "10px",
		padding: "10px 10px",
		backgroundColor: "#007BFF",
		color: "#fff",
		border: "2px solid #000000",
		borderRadius: "4px",
		cursor: "pointer",
	},
};
