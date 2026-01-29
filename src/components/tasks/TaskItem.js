// src/components/TaskItem.js
export function TaskItem({ ele, task, setTask, setEditId, setEditTask }) {
	function handleCheckboxChange(id) {
		const newTasks = task.map((taskItem) => {
			if (taskItem.id === id) {
				return {
					...taskItem,
					status: taskItem.status === "complete" ? "incomplete" : "complete",
					updatedAt: new Date().toISOString(),
				};
			}
			return taskItem;
		});
		setTask(newTasks);
	}

	function toggleEdit(id) {
		setEditId(id);
		const foundTask = task.find((ele) => ele.id === id);
		if (foundTask) {
			setEditTask(foundTask.name);
		}
	}

	function handleDelete(id) {
		if (window.confirm("Are you sure you want to delete this task?")) {
			const filterArray = task.filter((ele) => ele.id !== id);
			setTask(filterArray);
		}
	}

	// Format date for display
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		});
	};

	// Check if task is overdue
	const isOverdue =
		new Date(ele.dueDate) < new Date() && ele.status !== "complete";

	return (
		<div
			style={{
				...styles.taskContainer,
				...(isOverdue ? styles.overdueTask : {}),
			}}
		>
			<input
				type='checkbox'
				checked={ele.status === "complete"}
				onChange={() => handleCheckboxChange(ele.id)}
				style={styles.checkbox}
			/>

			<div style={styles.taskContent}>
				<label
					style={{
						...styles.taskLabel,
						textDecoration: ele.status === "complete" ? "line-through" : "none",
						color: ele.status === "complete" ? "#6c757d" : "#212529",
					}}
				>
					<strong>{ele.name}</strong>
					<span
						style={{
							...styles.priorityBadge,
							backgroundColor:
								ele.priority === "high"
									? "#dc3545"
									: ele.priority === "medium"
									? "#ffc107"
									: "#28a745",
						}}
					>
						{ele.priority}
					</span>
				</label>

				<div style={styles.taskMeta}>
					<span style={styles.dueDate}>
						Due: {formatDate(ele.dueDate)}
						{isOverdue && <span style={styles.overdueText}> (Overdue)</span>}
					</span>
					<span style={styles.createdAt}>
						Created: {formatDate(ele.createdAt)}
					</span>
				</div>
			</div>

			<div style={styles.taskActions}>
				<button
					onClick={() => toggleEdit(ele.id)}
					style={styles.editButton}
					title='Edit task'
				>
					✏️
				</button>
				<button
					onClick={() => handleDelete(ele.id)}
					style={styles.deleteButton}
					title='Delete task'
				>
					🗑️
				</button>
			</div>
		</div>
	);
}

const styles = {
	taskContainer: {
		display: "flex",
		alignItems: "center",
		padding: "10px",
		margin: "5px 0",
		backgroundColor: "#fff",
		border: "1px solid #dee2e6",
		borderRadius: "4px",
		transition: "all 0.2s",
	},
	overdueTask: {
		borderLeft: "4px solid #dc3545",
		backgroundColor: "#fff5f5",
	},
	checkbox: {
		marginRight: "10px",
		transform: "scale(1.2)",
	},
	taskContent: {
		flex: 1,
	},
	taskLabel: {
		display: "flex",
		alignItems: "center",
		gap: "10px",
		fontSize: "16px",
		marginBottom: "5px",
	},
	priorityBadge: {
		padding: "2px 8px",
		borderRadius: "12px",
		fontSize: "12px",
		color: "white",
		fontWeight: "bold",
	},
	taskMeta: {
		display: "flex",
		gap: "15px",
		fontSize: "12px",
		color: "#6c757d",
	},
	dueDate: {
		fontWeight: "bold",
	},
	overdueText: {
		color: "#dc3545",
		fontWeight: "bold",
	},
	createdAt: {
		fontStyle: "italic",
	},
	taskActions: {
		display: "flex",
		gap: "5px",
	},
	editButton: {
		background: "none",
		border: "1px solid #007bff",
		color: "#007bff",
		padding: "5px 10px",
		borderRadius: "4px",
		cursor: "pointer",
		fontSize: "14px",
	},
	deleteButton: {
		background: "none",
		border: "1px solid #dc3545",
		color: "#dc3545",
		padding: "5px 10px",
		borderRadius: "4px",
		cursor: "pointer",
		fontSize: "14px",
	},
};
