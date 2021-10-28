function myDay(value) {
    var output=document.getElementById("textBox").innerHTML;
    output.innerHTML="";
    document.getElementById("textBox").innerHTML=value;
    var tag = document.createElement("p");
    var text = document.createTextNode("Wednesday,October 27");
    tag.classList.add("my-class");
    tag.appendChild(text);
    var element = document.getElementById("textBox");
    element.appendChild(tag);
    let area=document.getElementsByClassName("line");
    area[0].innerText="";
    let horizontalLines=document.getElementsByClassName("lines");
    horizontalLines[0].style.display="block";
    let box=document.getElementsByClassName("myDayTask")
    box[0].style.display="block";
  }
  function important(value) {
    var output=document.getElementById("textBox").innerHTML;
    output.innerHTML="";
    document.getElementById("textBox").innerHTML=value;
    let area=document.getElementsByClassName("line");
    area[0].innerText="";
    let horizontalLines=document.getElementsByClassName("lines");
    horizontalLines[0].style.display="block";
    let box=document.getElementsByClassName("myDayTask")
    box[0].style.display="block";
  }
  function planned(value) {
    var output=document.getElementById("clickPlan").innerHTML;
    output.innerHTML="";
    document.getElementById("textBox").innerHTML=value; 
    let area=document.getElementsByClassName("line");
    area[0].innerText="";
    let horizontalLines=document.getElementsByClassName("lines");
    horizontalLines[0].style.display="block";
    let box=document.getElementsByClassName("myDayTask")
    box[0].style.display="block";
  }
  function assignedToMe(value) {
    var output=document.getElementById("clickassign").innerHTML;
    output.innerHTML="";
    document.getElementById("textBox").innerHTML=value;
    var tag = document.createElement("button");
    var text = document.createTextNode("...");
    tag.classList.add("myDayDotButton");
    tag.appendChild(text);
    var element = document.getElementById("textBox");
    element.appendChild(tag);
    tag = document.createElement('img');
    tag.classList.add("assigning-Image");
    tag.src='assets/assign.svg';
    element.appendChild(tag);
    tag = document.createElement("div");
    text = document.createTextNode("Task assigned to you in To Do or Planner show up here");
    tag.classList.add("assign-text");
    tag.appendChild(text);
    element.appendChild(tag);
    let horizontalLines=document.getElementsByClassName("lines");
    horizontalLines[0].style.display="none";
    let box=document.getElementsByClassName("myDayTask")
    box[0].style.display="none";
  }
  function tasks(value) {
    var output=document.getElementById("clickTask").innerHTML;
    output.innerHTML="";
    document.getElementById("textBox").innerHTML=value;
    let area=document.getElementsByClassName("line");
    area[0].innerText="";
    let horizontalLines=document.getElementsByClassName("lines");
    horizontalLines[0].style.display="block";
    let box=document.getElementsByClassName("myDayTask")
    box[0].style.display="block";
  }
  function showTask() {
    var input = document.getElementById("new-list");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add-task").click();
      }
    });
    let boxInput=document.getElementById("new-list");
    let newTask=document.getElementById("added-task");
    var listing=document.createElement("li");
    listing.classList.add('new-styling');
    listing.innerText=boxInput.value;
    newTask.appendChild(listing);
    boxInput.value="";
    let heading=document.getElementsByClassName("leftClick");
    var flow=listing.innerText;
    heading[0].innerHTML=flow;
    listing.addEventListener('click',function() {
    heading[0].innerHTML=listing.innerText;
    let area=document.getElementsByClassName("line");
    area[0].innerText="";
    let horizontalLines=document.getElementsByClassName("lines");
    horizontalLines[0].style.display="block";
    let box=document.getElementsByClassName("myDayTask")
    box[0].style.display="block";
    })	
  }
  
  function hide() {
    var x = document.getElementById("menuBox");
    var y =document.getElementById("leftcollapsed");
    if (x.style.display==="none") {
      x.style.display="flex";
      y.style.display="none";
    } else {
      x.style.display="none";
      y.style.display="flex";
    }
  }
  function arrowexpand() {
    var x = document.getElementById("menuBox");
    var y =document.getElementById("leftcollapsed")
    if (y.style.display==="flex") {
      x.style.display="flex";
      y.style.display="none";
    } else {
      x.style.display="none";
      y.style.display="flex";
    }
  }
  // var myDayArray=[];
  function addingSubTask(){
    let subtext=document.getElementById("myDayBox");
    let area=document.getElementsByClassName("line");
    var paragraph=document.createElement("li");
    paragraph.classList.add("new-styles");
    paragraph.innerText=subtext.value;
    area[0].appendChild(paragraph);
  //   var taskName=document.getElementById("myDayBox").value;
  //   console.log(taskName);
  //   myDayArray.push(taskName);
  //   console.log(myDayArray);
  //   subtext.value="";
  }
  // console.log(myDayArray);
  //  var allTask = {
  //  myDay: myDayArray,
  //   planned:[]

  // }
