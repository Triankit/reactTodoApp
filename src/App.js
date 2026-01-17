import { useState, useEffect } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { searchTask } from "./utils/search";

function App() {
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

export default App;
