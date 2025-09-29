
// ===== Task Management Dashboard Structure =====

// 1. Pre-filled tasks + LocalStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
   { id: 1, name: "Call supplier", date: "2025-09-29", completed: false },
   { id: 2, name: "Prepare invoice", date: "2025-09-30", completed: false },
   { id: 3, name: "Schedule delivery", date: "2025-10-01", completed: true },
   { id: 4, name: "Check stock", date: "2025-10-02", completed: false },
   { id: 5, name: "Send email report", date: "2025-10-03", completed: false },
  { id: 6, name: "Update website", date: "2025-10-04", completed: false },
  { id: 7, name: "Team meeting", date: "2025-10-05", completed: true },
  { id: 8, name: "Backup database", date: "2025-10-06", completed: false },
  { id: 9, name: "Order office supplies", date: "2025-10-07", completed: false },
  { id: 10, name: "Prepare presentation", date: "2025-10-08", completed: false },
];

// 2. DOM elements
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const taskDate = document.getElementById("taskDate");

let currentFilter = "all";

// 3. Save tasks to LocalStorage
function saveTasks() { ... }

// 4. Render tasks with filter
function renderTasks() {
  // clear old list
  // filter tasks (all, pending, completed)
  // if no tasks → show message
  // loop through tasks → build <li> with buttons (Done, Edit, Delete)
}

// 5. Add new task (form submit)
taskForm.addEventListener("submit", e => {
  // prevent reload
  // validate inputs
  // create new task object
  // push to array, save, render
});

// 6. Toggle complete
function toggleTask(id) {
  // switch completed true/false
  // save + render
}

// 7. Edit task
function editTask(id) {
  // find task by id
  // prompt new name + new date
  // validate → update values
  // save + render
}

// 8. Delete task
function deleteTask(id) {
  // confirm before delete
  // filter tasks array
  // save + render
}

// 9. Set filter
function setFilter(filter) {
  // update currentFilter
  // render again
}

// 10. Initial render
renderTasks();
