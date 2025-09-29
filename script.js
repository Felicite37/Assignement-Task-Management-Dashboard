
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

//  2. DOM elements
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const taskDate = document.getElementById("taskDate");

let currentFilter = "all";

// 3. Save tasks to LocalStorage
function saveTasks() { localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 4. Render tasks with filter
function renderTasks() {
    taskList.innerHTML = "";
    let filteredTasks = tasks;
     if (currentFilter === "pending") filteredTasks = tasks.filter(t => !t.completed);

else if (currentFilter === "completed") filteredTasks = tasks.filter(t => t.completed);

if (filteredTasks.length === 0) {
  taskList.innerHTML = `<p class="text-gray-500 text-center">No tasks available.</p>`;
  return;
}

filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow";

    li.innerHTML = `
    <div>
        <h3 class="font-medium ${task.completed ? "line-through text-gray-500" : ""}">
          ${task.name}
        </h3>
        <p class="text-sm text-gray-500">Due: ${task.date}</p>
      </div>
      <div class="flex gap-2">
        <button onclick="toggleTask(${task.id})" 
          class="px-2 py-1 ${task.completed ? "bg-gray-500" : "bg-green-500"} text-white rounded">
          ${task.completed ? "Undo" : "Done"}
        </button>
        <button onclick="editTask(${task.id})" class="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
        <button onclick="deleteTask(${task.id})" class="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// 5. Add new task (form submit)
taskForm.addEventListener("submit", e => {
    e.preventDefault();
if (taskName.value.trim() === "" || taskDate.value === "") {
  alert("Task name and due date are required!");
  return;
}
const newTask = {
  id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
  name: taskName.value.trim(),
  date: taskDate.value,
  completed: false,
};
 tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskForm.reset();
});
    
  // prevent reload
  // validate inputs
  // create new task object
  // push to array, save, render
;

// 6. Toggle complete
function toggleTask(id) {
    tasks = tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
saveTasks();
  renderTasks();
}
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
