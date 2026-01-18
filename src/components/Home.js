import { useState, useEffect } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { Header } from "./Header";
import { searchTask } from "../utils/utility";
import { TaskSummary } from "./TaskSummary";

function Home() {
	const [task, setTask] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredTasks, setFilteredTasks] = useState([]);
	const [userPriority, setUserPriority] = useState("");

	useEffect(() => {
		if (searchTerm.length >= 3) {
			const searchResults = searchTask(task, searchTerm);
			console.log("searchResults", searchResults);
			setFilteredTasks(searchResults);
		} else {
			setFilteredTasks(null);
		}
	}, [searchTerm, task]);

	return (
		<div>
			<Header setSearchTerm={setSearchTerm} />
			<TaskSummary
				task={task}
				setTask={setTask}
				setFilteredTasks={setFilteredTasks}
			/>
			<TaskForm
				setTask={setTask}
				userPriority={userPriority}
				setUserPriority={setUserPriority}
			/>
			<TaskList
				task={filteredTasks ? filteredTasks : task}
				setTask={setTask}
				searchTerm={searchTerm}
				userPriority={userPriority}
				setUserPriority={setUserPriority}
			/>
		</div>
	);
}

export default Home;
