let container = document.querySelector(".container");

let remove = document.querySelector(".remove-group");
let removeFade = document.querySelector(".remove-fade");
let removePurple = document.querySelector(".remove-purple");

remove.addEventListener("click", (event) => {
  input.value = "";
});

let wideAddButton = document.querySelector(".wide-add-button");
let roundAddButton = document.querySelector(".round-add-button");

wideAddButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "#5a1ea9";
});

wideAddButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "#833ae0";
});

roundAddButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "#5a1ea9";
  event.stopPropagation();
});

roundAddButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "#9953f1";
  event.stopPropagation();
});

let taskArray = [];
let input = document.querySelector("input");
let inputBox = document.querySelector(".input-area");
let listBox = document.querySelector(".list-box");
listBox.style.overflowX = "hidden";
let taskBox = document.querySelector(".tasks-area");
let taskList = document.createElement("ul");
taskBox.append(taskList);
taskList.style.margin = "0px";
taskList.style.paddingLeft = "22px";
taskList.style.paddingRight = "30px";
taskList.style.listStyleType = "none";

wideAddButton.addEventListener("click", addTask);
document.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
});

function addTask() {
  if ((taskList.style.height = "0px")) {
    inputBox.style.height = "200px";
    taskBox.style.height = "162px";
    listBox.style.height = "200px";
    container.style.height = "396px";
  }
  if (taskList.style.height > "162px") {
    listBox.style.overflowY = "scroll";
  }

  taskArray.unshift(input.value);

  taskList.innerHTML = "";

  taskArray.forEach((item, index) => {
    task = document.createElement("li");
    taskList.append(task);

    task.innerHTML =
      '<div class="task-text"></div> <div class="task-remove-group"><div class="task-remove-fade"><img src="/remove-icons/remove-fade.svg" alt="remove-fade"></div> <div class="task-remove-purple"><img src="/remove-icons/remove-purple.svg" alt="remove-purple" class="task-remove-purple"></div></div>';
    task.firstElementChild.innerText = item;
    task.firstElementChild.contentEditable = "true";
  });

  input.value = "";

  document.querySelectorAll(".task-remove-group").forEach((item, index) => {
    item.addEventListener("click", (event) => {
      taskList.removeChild(item.parentElement);
      console.log(item.parentElement);
      document.querySelectorAll(".task-text").forEach((item, index) => {
        taskArray[index] = item.innerText;
      });
      taskArray.pop();
    });
  });
}

let sortButton = document.querySelector(".sort-button");
let sortAz = document.querySelector(".sort-a-z");
let sortZa = document.querySelector(".sort-z-a");
let sortZaBlack = document.querySelector(".sort-z-a-black");

let clickNumOfSort = 0;

sortButton.addEventListener("click", (event) => {
  clickNumOfSort++;
  if (clickNumOfSort % 2 == 1) {
    taskArray.sort();
    sortAz.style.display = "none";
    sortZa.style.display = "block";
    sortButton.addEventListener("mouseout", (event) => {
      sortZaBlack.style.display = "none";
    });
    sortButton.addEventListener("mouseover", (event) => {
      sortZaBlack.style.display = "block";
    });
  } else {
    taskArray.sort().reverse();
    sortAz.style.display = "block";
    sortZa.style.display = "none";
  }
  document.querySelectorAll("li").forEach((item, index) => {
    task.innerHTML =
      '<div class="task-text"></div> <div class="task-remove-group"><div class="task-remove-fade"><img src="/remove-fade.svg" alt="remove-fade"></div> <div class="task-remove-purple"><img src="/remove-purple.svg" alt="remove-purple" class="task-remove-purple"></div></div>';
    item.firstElementChild.innerText = taskArray[index];
  });
});