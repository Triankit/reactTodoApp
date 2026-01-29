// src/utils/taskStorage.js
export const getUserTasksFromStorage = (userId) => {
	if (!userId) return []; // Add this check

	const key = `todo_tasks_user_${userId}`;
	const tasksStr = localStorage.getItem(key);

	if (!tasksStr) return []; // Handle null/undefined/empty string

	try {
		return JSON.parse(tasksStr);
	} catch (error) {
		console.error("Error parsing tasks from localStorage:", error);
		return []; // Return empty array on parse error
	}
};

export const saveUserTasksToStorage = (userId, tasks) => {
	if (!userId) return; // Add this check

	const key = `todo_tasks_user_${userId}`;
	try {
		localStorage.setItem(key, JSON.stringify(tasks));
	} catch (error) {
		console.error("Error saving tasks to localStorage:", error);
	}
};

// Update other functions to include userId validation
export const addTaskToStorage = (userId, task) => {
	if (!userId) return []; // Add this check

	const tasks = getUserTasksFromStorage(userId);
	const updatedTasks = [...tasks, task];
	saveUserTasksToStorage(userId, updatedTasks);
	return updatedTasks;
};

export const updateTaskInStorage = (userId, taskId, updatedTask) => {
	if (!userId) return []; // Add this check

	const tasks = getUserTasksFromStorage(userId);
	const updatedTasks = tasks.map((task) =>
		task.id === taskId
			? { ...task, ...updatedTask, updatedAt: new Date().toISOString() }
			: task
	);
	saveUserTasksToStorage(userId, updatedTasks);
	return updatedTasks;
};

export const deleteTaskFromStorage = (userId, taskId) => {
	if (!userId) return []; // Add this check

	const tasks = getUserTasksFromStorage(userId);
	const updatedTasks = tasks.filter((task) => task.id !== taskId);
	saveUserTasksToStorage(userId, updatedTasks);
	return updatedTasks;
};

export const getTaskStatsFromStorage = (userId) => {
	if (!userId) return { total: 0, completed: 0, incomplete: 0 }; // Add default

	const tasks = getUserTasksFromStorage(userId);
	const total = tasks.length;
	const completed = tasks.filter((task) => task.status === "complete").length;
	const incomplete = total - completed;

	return { total, completed, incomplete };
};
