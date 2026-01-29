import { useState, useEffect } from "react";
import { CreateTask } from "../tasks/CreateTask";
import { TaskList } from "../tasks/TaskList";
import { Header } from "./Header";
import { searchTask } from "../../utils/utility";
import { TaskDashboard } from "../tasks/TaskDashboard";
import { useLocation, useNavigate } from "react-router-dom";
import {
	getCurrentUserFromStorage,
	clearCurrentUserFromStorage,
} from "../../utils/userData";
import {
	getUserTasksFromStorage,
	saveUserTasksToStorage,
	getTaskStatsFromStorage,
} from "../../utils/taskStorage";
function Home() {
	const [task, setTask] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredTasks, setFilteredTasks] = useState([]);
	const [userPriority, setUserPriority] = useState("");
	const [user, setUser] = useState(null);

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		let currentUser = getCurrentUserFromStorage();
		if (!currentUser) {
			navigate("/", { replace: true });
			return;
		}
		setUser(currentUser);

		const userTask = getUserTasksFromStorage(currentUser.id);
		setTask(userTask || []);

		if (!location.state) {
			location.state = {
				userEmail: currentUser.email,
				isAuthenticated: true,
			};
		}
	}, [navigate, location]);
	useEffect(() => {
		console.log("searchTerm", searchTerm);
		if (searchTerm.length >= 3) {
			const searchResults = searchTask(task, searchTerm);
			setFilteredTasks(searchResults);
		} else {
			setFilteredTasks([]);
		}
	}, [searchTerm, task]);

	useEffect(() => {
		if (user) {
			saveUserTasksToStorage(user.id, task);
		}
	}, [task, user]);

	const handleLogout = () => {
		clearCurrentUserFromStorage();
		navigate("/");
	};

	const updateTask = (newTasks) => {
		setTask(newTasks);
		if (user) {
			saveUserTasksToStorage(user.id, newTasks);
		}
	};

	const taskStats = user
		? getTaskStatsFromStorage(user.id)
		: { total: 0, completed: 0, incomplete: 0 };
	return (
		<div>
			<Header
				setSearchTerm={setSearchTerm}
				user={user}
				onLogout={handleLogout}
			/>
			{/* Task Summary */}
			<TaskDashboard
				task={task}
				setTask={updateTask}
				setFilteredTasks={setFilteredTasks}
				taskStats={taskStats}
			/>
			{/* TaskForm */}
			<CreateTask
				setTask={updateTask}
				userPriority={userPriority}
				setUserPriority={setUserPriority}
				userId={user?.id}
			/>
			<TaskList
				task={filteredTasks.length > 0 ? filteredTasks : task}
				setTask={updateTask}
				searchTerm={searchTerm}
				userPriority={userPriority}
				setUserPriority={setUserPriority}
			/>
		</div>
	);
}

export default Home;
