const tasks = [];

function createCard(taskInfo, index) {
  const taskCardItem = document.createElement("li");
  const taskCardContent = document.createElement("div");
  const taskType = document.createElement("span");
  const taskDescription = document.createElement("p");

  taskDescription.innerText = taskInfo.title;

  if (taskInfo.type === "Urgente") {
    taskType.classList.add("span-urgent");
  } else if (taskInfo.type === "Prioritário") {
    taskType.classList.add("span-priority");
  } else {
    taskType.classList.add("span-normal");
  }

  taskCardContent.appendChild(taskType);
  taskCardContent.appendChild(taskDescription);

  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  buttonDelete.addEventListener("click", function () {
    tasks.splice(index, 1);
    renderElements(tasks);
  });

  taskCardItem.appendChild(taskCardContent);
  taskCardItem.appendChild(buttonDelete);

  return taskCardItem;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    const card = createCard(taskList[i], i);
    htmlList.appendChild(card);
  }
}

function addTask(event) {
  event.preventDefault();

  const titleInput = document.getElementById("input_title");
  const typeInput = document.getElementById("input_priority");

  const title = titleInput.value;
  const type = typeInput.value;

  const newTask = {
    title: title,
    type: type,
  };

  tasks.push(newTask);

  renderElements(tasks);

  titleInput.value = "";
  typeInput.value = "Urgente";
}

const form = document.querySelector("form");
form.addEventListener("submit", addTask);

renderElements(tasks);
