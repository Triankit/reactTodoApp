import { useState } from "react";
import { EditForm } from "./EditForm";
import { DisplayTask } from "./DisplayTask";
export function TaskList({
	task,
	setTask,
	searchTerm,
	userPriority,
	setUserPriority,
}) {
	const [editId, setEditId] = useState(null);
	const [editTask, setEditTask] = useState("");

	return (
		<>
			{task.map((ele) => (
				<div key={ele.id}>
					{editId === ele.id ? (
						<EditForm
							ele={ele}
							editTask={editTask}
							setEditTask={setEditTask}
							setEditId={setEditId}
							task={task}
							setTask={setTask}
							userPriority={userPriority}
							setUserPriority={setUserPriority}
						/>
					) : (
						<DisplayTask
							ele={ele}
							task={task}
							setTask={setTask}
							searchTerm={searchTerm}
							setEditId={setEditId}
							setEditTask={setEditTask}
						/>
					)}
				</div>
			))}
		</>
	);
}
