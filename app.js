// var min = 60
// var sec = 60
// var MiliSecond = 60
// var displayMin = document.getElementById("displayMin")
// var displaySec = document.getElementById("displaySec")
// var displayMiliSecond = document.getElementById("displayMiliSec")

// var interval;

// function timer(){
//     MiliSecond--;
//     if(MiliSecond == 0){
//         MiliSecond = 10;
//         sec--;
//         if (sec == 0) {
//             sec = 00;
//             alert("timeup")
//             resetTimer()
//             min--
//         }
//     }

//     displayMiliSecond.innerHTML = MiliSecond
//     displayMin.innerHTML = min
//     displaySec.innerHTML = sec

// }

// function startTimer(){
//     interval = setInterval(function () {
//     timer()},100)
// }
// function pauseTimer (){
//     clearInterval(interval)
// }
// function resetTimer(){
//     pauseTimer()
//     min = 0
//     sec = 0
//     MiliSecond = 0
//     displayMiliSecond.innerHTML = MiliSecond
//     displaySec.innerHTML = sec
//     displayMin.innerHTML = min

// }

var mn = document.getElementById("mn");
function addval() {
  if (inpu.value == "") {
    alert("Enter SOmething");
  } else {
    console.log(inpu);
    var li = document.createElement("li");
    var litext = document.createTextNode(inpu.value);
    li.appendChild(litext);
    mn.appendChild(li);

    var editbtn = document.createElement("BUTTON");
    var editbtntext = document.createTextNode("Edit TOdo");
    editbtn.appendChild(editbtntext);
    editbtn.setAttribute("onclick", "edittodo(this)");
    li.appendChild(editbtn);
    mn.appendChild(li);
    inpu.value = "";
    // delt btn strt
    var delbtn = document.createElement("BUTTON");
    var delbtntext = document.createTextNode("Delete");
    delbtn.appendChild(delbtntext);
    delbtn.setAttribute("onclick", "delt(this)");
    li.appendChild(delbtn);
    mn.appendChild(li);
  }
}
function edittodo(element) {
  var newvalue = prompt("Enter YOur Value");
  console.log(element.parentNode.firstChild.nodeValue);
  element.parentNode.firstChild.nodeValue = newvalue;
}
function delt(element) {
  element.parentNode.remove();
}
function deltall() {
  mn.innerHTML = "";
}
