export function searchTask(task, searchEle) {
	const searchResults = task.filter((ele) => ele.name.includes(searchEle));
	return searchResults;
}

export function remainingTaskTodo(task) {
	const remainingTasks = task.filter((ele) => ele.status === "incomplete");
	return remainingTasks.length;
}

export function filterByComplete(task) {
	const completedTasks = task.filter((ele) => ele.status === "complete");
	return completedTasks;
}

export function filterByIncomplete(task, priority) {
	const remainingTasks = task.filter((ele) => ele.status === "incomplete");
	return remainingTasks;
}

export function validateEmail(email) {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}

export function isUserExist(email, userData) {
	return userData.some((user) => user.email === email);
}

export function validateUser(user, userData) {
	return userData.some(
		(userDataUser) =>
			userDataUser.email === user.email &&
			userDataUser.password === user.password
	);
}

export function getUser(email, userData, isAuthenticated) {
	if (isAuthenticated) return userData.find((user) => user.email === email);
	return null;
}
