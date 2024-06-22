const div = document.createElement("div");
document.body.appendChild(div);
div.style.fontSize = "32px";
div.innerText = "0.00";
const soundclip = new Audio("Bioshock Infinite - Objective Updated.mp3");
soundclip.volume = 0.1;

function Timer(target) {
  let count = 0;
  const startTime = Date.now();
  checkTime();
  function checkTime() {
    count = (Date.now() - startTime) / 60000;
    const score = ((count * count * 1.7) / target) * Math.random();
    if (score >= target) {
      div.innerHTML = score.toFixed(2) + " " + count.toFixed(2);
      document.body.style.backgroundColor = "red";
      soundclip.play();
      document.title = "Time's up!";
    } else {
      document.body.style.backgroundColor = "white";
      div.innerHTML = score.toFixed(2) + " " + count.toFixed(2) + "/" + target;
      document.title = count.toFixed(2) + "/" + target;
      setTimeout(checkTime, 5000);
    }
  }
}
let time;
const start = document.createElement("button");
start.innerHTML = "Start";
start.onclick = () => {
  new Timer(time);
};
document.body.appendChild(start);
const input = document.createElement("input");
document.body.appendChild(input);
input.type = "number";
input.onchange = () => {
  time = input.value;
};
let tasks = [];
const taskButton = document.createElement("button");
document.body.appendChild(taskButton);
const taskInput = document.createElement("input");
document.body.appendChild(taskInput);

const selectButton = document.createElement("button");
document.body.appendChild(selectButton);
taskInput.type = "text";

selectButton.innerHTML = "Select Task";
taskButton.innerHTML = "Add Task";
taskButton.onclick = () => {
  tasks.push(taskInput.value);
  taskInput.value = "";
  taskDiv.innerText = "Tasks: \n";
  tasks.forEach((task) => {
    taskDiv.innerText += task + "\n";
  });
};

selectButton.onclick = () => {
  alert(selectRandomTask());
};
function selectRandomTask() {
  return tasks[Math.floor(Math.random() * tasks.length)];
}
const taskDiv = document.createElement("div");
document.body.appendChild(taskDiv);
