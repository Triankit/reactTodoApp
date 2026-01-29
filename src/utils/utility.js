import { initializeUserStorage, saveUsersToStorage } from "./userData";

export function searchTask(task, searchEle) {
	const searchResults = task.filter((ele) =>
		ele.name.toLowerCase().includes(searchEle.toLowerCase())
	);
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

export function filterByIncomplete(task) {
	const remainingTasks = task.filter((ele) => ele.status === "incomplete");
	return remainingTasks;
}

export function validateEmail(email) {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}

export function isUserExist(email) {
	const users = initializeUserStorage();
	return users.some((user) => user.email === email);
}

export function validateUser(user) {
	const users = initializeUserStorage();
	console.log("validateUser called");
	console.log("Validating user:", user);
	console.log("Existing users:", users);
	return users.some(
		(userDataUser) =>
			userDataUser.email === user.email &&
			userDataUser.password === user.password
	);
}

export function getUser(email) {
	const users = initializeUserStorage();
	return users.find((user) => user.email === email) || null;
}

export function createUser(newUser) {
	const users = initializeUserStorage();
	const userWithId = {
		...newUser,
		id: Date.now(),
		createdAt: new Date().toISOString(),
		lastLogin: null,
	};
	const updatedUsers = [...users, userWithId];
	saveUsersToStorage(updatedUsers);
	return userWithId;
}

export function updateUserLastLogin(email) {
	const users = initializeUserStorage();
	const updatedUsers = users.map((user) =>
		user.email === email
			? { ...user, lastLogin: new Date().toISOString() }
			: user
	);
	saveUsersToStorage(updatedUsers);
}
