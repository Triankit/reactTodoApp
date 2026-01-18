import { useState } from "react";
import { EditForm } from "./EditForm";
import { TaskItem } from "./TaskItem";
export function TaskList({ task, setTask, userPriority, setUserPriority }) {
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
						<TaskItem
							ele={ele}
							task={task}
							setTask={setTask}
							setEditId={setEditId}
							setEditTask={setEditTask}
						/>
					)}
				</div>
			))}
		</>
	);
}
