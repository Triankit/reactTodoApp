import { useState } from "react";
import { PrioritySelect } from "../shared/PrioritySelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function CreateTask({ setTask, userPriority, setUserPriority }) {
	const [userInput, setUserInput] = useState("");
	const [dueDate, setDueDate] = useState(new Date());
	function handleSubmit(event) {
		event.preventDefault();
		if (userInput === "") return;
		const newTask = {
			id: Date.now(),
			name: userInput,
			status: "incomplete",
			priority: userPriority || "low",
			dueDate: dueDate,
		};
		setTask((task) => [...task, newTask]);
		setUserInput("");
	}

	return (
		<div>
			<input
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				placeholder='Enter the task'
			/>
			<PrioritySelect setUserPriority={setUserPriority} />
			<DatePicker
				selected={dueDate}
				onChange={(date) => setDueDate(date)}
				minDate={new Date()} // Disables all dates before today
				dateFormat='dd/MM/yyyy'
			/>
			<button
				type='submit'
				onClick={handleSubmit}
				style={{ marginLeft: "5px" }}
			>
				Add Task
			</button>
			<hr />
		</div>
	);
}
