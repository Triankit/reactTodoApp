import { useState } from "react";
import "./App.css";

function App() {
	const [task, setTask] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [editId, setEditId] = useState(null);
	const [editTask, setEditTask] = useState("");
	const [checkedTasks, setCheckedTasks] = useState(false);
	function handleSubmit(event) {
		event.preventDefault();
		if (userInput === "") return;
		const newTask = {
			id: Date.now(),
			name: userInput,
			status: "incomplete",
		};
		setTask((task) => [...task, newTask]);
		setUserInput("");
	}

	function toogleEdit(id) {
		setEditId(id);
		task.map((ele) => {
			if (ele.id === id) {
				return setEditTask(ele.name);
			}
			return null;
		});
	}

	function handleEdit(id) {
		const updatedTasks = task.map((ele) => {
			if (ele.id === id) {
				return { ...ele, name: editTask };
			}
			return ele;
		});
		setTask(updatedTasks);
		setEditId(null);
	}

	function handleDelete(id) {
		const filterArray = task.filter((ele) => {
			return ele.id !== id;
		});
		setTask(filterArray);
	}

	function handleCheckboxChange(id) {
		const checkedTask = task.find((ele) => ele.id === id);
		if (checkedTask) {
			checkedTask.status =
				checkedTask.status === "complete" ? "incomplete" : "complete";
			setTask([...task]);
		}
		setCheckedTasks(!checkedTasks);
	}

	return (
		<div className='App'>
			<h1>To do App</h1>
			<div>
				<input
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder='Enter the task'
				/>
				<button
					type='submit'
					onClick={handleSubmit}
					style={{ marginLeft: "5px" }}
				>
					{" "}
					Add Task{" "}
				</button>
				<hr />
			</div>
			<div>
				<ul>
					{task.map((ele) => (
						<div key={ele.id}>
							{editId === ele.id ? (
								<div>
									<input
										value={editTask}
										autoFocus={true}
										onChange={(e) => {
											setEditTask(e.target.value);
										}}
									/>
									<button onClick={() => handleEdit(ele.id)}>✅</button>
									<button onClick={() => setEditId(null)}>❌</button>
								</div>
							) : (
								<>
									<input
										type='checkbox'
										checked={ele.status === "complete"}
										onChange={() => {
											handleCheckboxChange(ele.id);
										}}
									/>
									<text
										style={{
											textDecoration:
												ele.status === "complete" ? "line-through" : "",
										}}
									>
										{ele.name}
									</text>
								</>
							)}
							<button
								onClick={() => toogleEdit(ele.id)}
								style={{ marginLeft: "5px" }}
							>
								✍🏻
							</button>
							<button
								onClick={() => handleDelete(ele.id)}
								style={{ marginLeft: "5px" }}
							>
								🗑
							</button>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
