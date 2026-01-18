import { useState, useEffect } from "react";
import { CreateTask } from "../tasks/CreateTask";
import { TaskList } from "../tasks/TaskList";
import { Header } from "./Header";
import { searchTask } from "../../utils/utility";
import { TaskDashboard } from "../tasks/TaskDashboard";
import { useLocation } from "react-router-dom";
import { getUser } from "../../utils/utility";
import { userData } from "../../utils/userData";

function Home() {
	const [task, setTask] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredTasks, setFilteredTasks] = useState([]);
	const [userPriority, setUserPriority] = useState("");
	const [user, setUser] = useState(null);

	const location = useLocation();
	const { userEmail, isAuthenticated } = location.state || {};

	useEffect(() => {
		if (isAuthenticated) {
			const user = getUser(userEmail, userData, isAuthenticated);
			setUser(user);
		}
	}, [userEmail, isAuthenticated]);
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
			<Header setSearchTerm={setSearchTerm} user={user} />
			<TaskDashboard
				task={task}
				setTask={setTask}
				setFilteredTasks={setFilteredTasks}
			/>
			<CreateTask
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
