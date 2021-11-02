let toDo= [{
  head: 'MyDay', 
  addingTask: [],
}]

function pageLoad(value) {
  var pageHeader=document.getElementById("text-box").innerHTML;
  pageHeader.innerHTML="";
  document.getElementById("text-box").innerHTML=value;
  let taskAddingPlace=document.getElementsByClassName("task-place");
  taskAddingPlace[0].innerText="";
  var taskAdd=document.getElementById("add");
  var heading = document.getElementById(value).innerText;
  let arrayIndex=(toDo.findIndex(c => c.head==heading))
  if (arrayIndex==-1){
    let newObject = { head: heading , addingTask: [] }
      toDo.push(newObject);
      arrayIndex = (toDo.findIndex(c => c.head == heading))

      taskAdd.onclick=function() {
        let taskText=document.getElementById("add-task-box");
        var tasksName=taskText.value;
        toDo[arrayIndex].addingTask.push(tasksName);
        let tasksList = document.createElement("li");
        tasksList.setAttribute('id','task-line');
        let createdText=document.createTextNode(tasksName);
        tasksList.appendChild(createdText);
        taskAddingPlace[0].appendChild(tasksList);
        taskText.value="";
      }
  } else {
    arrayIndex = (toDo.findIndex(c => c.head == heading));
    taskAdd.onclick=function() {
      let taskText=document.getElementById("add-task-box");
      var tasksName=taskText.value;
      toDo[arrayIndex].addingTask.push(tasksName);
      let tasksList = document.createElement("li");
      tasksList.setAttribute('id','task-line');
      let createdText=document.createTextNode(tasksName);
      tasksList.appendChild(createdText);
      taskAddingPlace[0].appendChild(tasksList);
      taskText.value="";
    }
  }
  for (let index = 0; index < (toDo[arrayIndex].addingTask.length); index++) {
      let tasksList = document.createElement("li");
      tasksList.setAttribute('id','task-line');
      let createdText = document.createTextNode( toDo[arrayIndex].addingTask[index]);
      tasksList.style.listStyle="none"
      tasksList.appendChild(createdText);
      taskAddingPlace[0].appendChild(tasksList);
    }
}

function assignedToMe(value) {
  var pageHeader=document.getElementById("assign").innerHTML;
  pageHeader.innerHTML="";
  document.getElementById("text-box").innerHTML=value;
  var sideButton = document.createElement("button");
  var text = document.createTextNode("...");
  sideButton.classList.add("myDayDotButton");
  sideButton.appendChild(text);
  var headerDiv = document.getElementById("text-box");
  headerDiv.appendChild(sideButton);
  sideButton = document.createElement('img');
  sideButton.classList.add("assigning-Image");
  sideButton.src='assets/assign.svg';
  headerDiv.appendChild(sideButton);
  sideButton = document.createElement("div");
  text = document.createTextNode("Task assigned to you in To Do or Planner show up here");
  sideButton.classList.add("assign-text");
  sideButton.appendChild(text);
  headerDiv.appendChild(sideButton);
}

function showList() {
  let taskAddingPlace=document.getElementsByClassName("task-place");
  taskAddingPlace[0].innerText="";
  let boxInput=document.getElementById("new-list");
  let newTask=document.getElementById("added-task");
  var newList=document.createElement("li");
  newList.classList.add('new-styling');
  newList.innerText=boxInput.value;
  var dynamicId=newList.innerHTML;
  newList.setAttribute('id',dynamicId);
  newTask.appendChild(newList);
  boxInput.value="";
  let heading=document.getElementsByClassName("page-header");
  var flow=newList.innerText;
  heading[0].innerHTML=flow;
  let deleteButton=document.getElementById("list-delete-button");
  newList.addEventListener('click',function() {
    heading[0].innerHTML=newList.innerText;
    let taskAddingPlace=document.getElementsByClassName("task-place");
    taskAddingPlace[0].innerText="";
    let box=document.getElementsByClassName("task-add");
    box[0].style.display="block";
    var header = document.getElementById("text-box").innerHTML;
    let arrayIndex=(toDo.findIndex(c => c.head==header))
    console.log(arrayIndex);
    document.getElementById("text-box").contentEditable="true";
    var pageHeader= document.getElementById("text-box")
    pageHeader.onkeypress = function (event) {
      if (event.key == "Enter") {
        let editedHeading = pageHeader.innerText;
        var listName=document.getElementById(dynamicId)
        listName.innerHTML=editedHeading;
        toDo[arrayIndex].head = editedHeading;
      }
    }
    var deleteList=document.getElementById(dynamicId);
      console.log(deleteList)
    deleteButton.onclick=function() {
      var newList=document.getElementsByClassName("new-styling")
      console.log(newList[0])
      var deleteList=document.getElementById(dynamicId);
      console.log(deleteList)
      deleteList.remove();
      taskAddingPlace[0].innerText="";
      heading[0].innerHTML="planned";
    }
    var taskAdd=document.getElementById("add");
    let taskText=document.getElementById("add-task-box");
    let headings=newList.innerText;
    arrayIndex=(toDo.findIndex(c => c.head==headings))
    if (arrayIndex!=-1){
      arrayIndex = (toDo.findIndex(c => c.head == headings))
      console.log(arrayIndex);
      taskAdd.onclick=function() {
        let taskText=document.getElementById("add-task-box");
        var tasksName=taskText.value;
        toDo[arrayIndex].addingTask.push(tasksName)
        let tasksList = document.createElement("li");
        tasksList.setAttribute('id','task-line');
        let createdText=document.createTextNode(tasksName);
        tasksList.appendChild(createdText)
        taskAddingPlace[0].appendChild(tasksList);
        taskText.value=""; 
      }
    } else {
      let newObject = { head: headings , addingTask: [] }
      toDo.push(newObject);
      arrayIndex = (toDo.findIndex(c => c.head == headings))
      taskAdd.onclick=function() {
        let taskText=document.getElementById("add-task-box");
        var tasksName=taskText.value;
        toDo[arrayIndex].addingTask.push(tasksName)
        let tasksList = document.createElement("li");
        tasksList.setAttribute('id','task-line');
        let createdText=document.createTextNode(tasksName);
        tasksList.appendChild(createdText)
        taskAddingPlace[0].appendChild(tasksList)
        taskText.value="";
      }
  }
    for (let index = 0; index < (toDo[arrayIndex].addingTask.length); index++) {
      let tasksList = document.createElement("li");
      tasksList.setAttribute('id','task-line');
      let createdText = document.createTextNode( toDo[arrayIndex].addingTask[index]);
      tasksList.style.listStyle="none"
      tasksList.appendChild(createdText)
      taskAddingPlace[0].appendChild(tasksList)
    }
  })	
}

function hide() {
  var expandedLeftBar = document.getElementById("left-side-menu");
  var toggledLeftBar =document.getElementById("minimis-left-bar");
  if (expandedLeftBar.style.display==="none") {
    expandedLeftBar.style.display="flex";
    toggledLeftBar.style.display="none";
  } else {
    expandedLeftBar.style.display="none";
    toggledLeftBar.style.display="flex";
    }
}

function expandLeftBar() {
  var expandedLeftBar = document.getElementById("left-side-menu");
  var toggledLeftBar =document.getElementById("minimis-left-bar")
  if (toggledLeftBar.style.display==="flex") {
    expandedLeftBar.style.display="flex";
    toggledLeftBar.style.display="none";
  } else {
    expandedLeftBar.style.display="none";
    toggledLeftBar.style.display="flex";
    }
}