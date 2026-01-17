export function searchTask(task, searchEle) {
	const searchResults = task.filter((ele) => ele.name.includes(searchEle));
	return searchResults;
}

export function filterByPriority(task, priority) {
	const filteredResults = task.filter((ele) => ele.priority === priority);
	return filteredResults;
}
