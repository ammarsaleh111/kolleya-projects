const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  const item = document.createElement("li");
  const task = document.createElement("span");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  task.textContent = taskText;

  completeButton.textContent = "Done";
  completeButton.addEventListener("click", function () {
    item.classList.toggle("done");
  });

  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", function () {
    item.remove();
  });

  item.append(task, completeButton, deleteButton);
  list.appendChild(item);

  input.value = "";
  input.focus();
});
