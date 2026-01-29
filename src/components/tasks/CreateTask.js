import { useState } from "react";
import { PrioritySelect } from "../shared/PrioritySelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function CreateTask({ setTask, userPriority, setUserPriority, userId }) {
	const [userInput, setUserInput] = useState("");
	const [dueDate, setDueDate] = useState(new Date());
	const now = new Date().toISOString(); // Create timestamp once

	function handleSubmit(event) {
		event.preventDefault();
		if (userInput === "") return;
		const newTask = {
			id: Date.now(),
			name: userInput,
			status: "incomplete",
			priority: userPriority || "low",
			dueDate: dueDate.toISOString(),
			userId: userId,
			createdAt: now,
			updatedAt: now,
		};
		setTask((task) => [...task, newTask]);
		setUserInput("");
		setUserPriority("");
		setDueDate(new Date());
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSubmit(event);
		}
	};

	return (
		<div style={styles.container}>
			<input
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				placeholder='Enter the task'
				onKeyDown={handleKeyDown}
				style={styles.input}
			/>
			<PrioritySelect
				setUserPriority={setUserPriority}
				selectedPriority={userPriority}
				styles={styles.dropDown}
			/>
			<DatePicker
				selected={dueDate}
				onChange={(date) => setDueDate(date)}
				minDate={new Date()} // Disables all dates before today
				dateFormat='dd/MM/yyyy'
				placeholderText='Select Due Date'
				style={styles.datePicker}
			/>
			<button
				type='submit'
				onClick={handleSubmit}
				style={styles.button}
				disabled={!userInput.trim()}
			>
				Add Task
			</button>
			<hr />
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		alignItems: "center",
		gap: "10px",
		margin: "20px",
		flexWrap: "wrap",
	},
	input: {
		padding: "4px",
		fontSize: "16px",

		minWidth: "200px",
	},
	datePicker: {
		padding: "4px",
		fontSize: "16px",
	},
	dropDown: {
		padding: "4px",
		fontSize: "16px",
	},
	button: {
		padding: "4px",
		fontSize: "16px",
		backgroundColor: "#28a745",
		color: "white",
		border: "none",
		cursor: "pointer",
		borderRadius: "4px",
	},
};
