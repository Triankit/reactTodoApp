export const defaultUser = [
	{ id: 1, name: "Guest User", password: "guest123", email: "guest@gmail.com" },
	{ id: 2, name: "Admin User", password: "admin123", email: "admin@gmail.com" },
	{ id: 3, name: "Test User", password: "test123", email: "test@gmail.com" },
];

export const initializeUserStorage = () => {
	if (!localStorage.getItem("todo_app_user")) {
		localStorage.setItem("todo_app_user", JSON.stringify(defaultUser));
	}
	return JSON.parse(localStorage.getItem("todo_app_user"));
};

export const saveUsersToStorage = (users) => {
	localStorage.setItem("todo_app_user", JSON.stringify(users));
};

export const getCurrentUserFromStorage = () => {
	const userStr = localStorage.getItem("todo_current_user");
	return userStr ? JSON.parse(userStr) : null;
};

export const setCurrentUserToStorage = (user) => {
	localStorage.setItem("todo_current_user", JSON.stringify(user));
};

export const clearCurrentUserFromStorage = (user) => {
	localStorage.removeItem("todo_current_user");
};

export const getRememberMeFlag = () => {
	return localStorage.getItem("todo_remember_me") === "true";
};

export const setRememberMeFlag = (remember) => {
	localStorage.setItem("todo_remember_me", remember.toString());
};
