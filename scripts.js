var HTMLlist;
var taskList;
taskList = [];

function Task(name, deadline, createDate, category){
    this.name = name;
    this.deadline = deadline;
    this.createDate = createDate;
    this.category = category;
    this.complete = false;
    taskList.push(this);
}

function load(){
    disclaimer();

    HTMLlist = document.getElementById("tasks");

    var addbutton = document.getElementById("addtask");

    addbutton.onclick = function(){

        var name = document.getElementById("newtask").value;
        var deadlineValue = document.getElementById("deadline").value;
        var deadline = new Date(deadlineValue);
        var createDate = new Date();
        var cat = document.getElementById("cat") .value;

        var newTask = new Task(name, deadline, createDate, cat);
        newTask.create();

        var sortNameHTML = document.getElementById("sortname");
        sortNameHTML.onclick = function(){
            sortTasksByName();
        }

        var sortDeadlineHTML = document.getElementById("sortdeadline");
        sortDeadlineHTML.onclick = function() {
            sortTasksByDeadline();
        }

        var sortDateHTML = document.getElementById("sortdate");
        sortDateHTML.onclick = function() {
            sortTasksByCreateDate();
        }

        var sortCategoryHTML = document.getElementById("sortcat");
        sortCategoryHTML.onclick = function() {
            sortTasksByCategory();
        }

    }
}

Task.prototype.create = function (){
    var li = document.createElement("li");
    li.classList.add("task");

    var namespan = document.createElement("span");
    namespan.classList.add("taskname");
    namespan.innerHTML = this.name;

    var createdatespan = document.createElement("span");
    createdatespan.classList.add("createdate");
    createdatespan.innerHTML = this.createDate.toDateString();

    var datespan = document.createElement("span");
    datespan.classList.add("taskdate");
    datespan.innerHTML = this.deadline.toDateString();

    var catspan = document.createElement("span");
    catspan.classList.add("category");
    catspan.innerHTML = this.category;

     var complete = document.createElement("input");
     complete.type = "checkbox";
     catspan.classList.add("complete");
     //cheange wording plz !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     //Terrible variable names but means preserves checkbox status for sorting after list clear and remake
     complete.checked = this.complete;

     complete.onclick = function(){
         //toggle true/false
         this.complete = !(this.complete);
         console.log(this.complete);

     }

     var deletespan = document.createElement("span");
     deletespan.classList.add("deletebutton");
     deletespan.innerHTML = "<button><i class=\"fas fa-minus-circle\"></i></button>";
     deletespan.onclick = function() {
         HTMLlist.removeChild(li);

     };

     li.appendChild(complete);
     li.appendChild(namespan);
     li.appendChild(datespan);
     li.appendChild(createdatespan);
     li.appendChild(catspan);
     li.appendChild(deletespan);

     HTMLlist.appendChild(li);

}

//START SORT FUNCTIONS
function sortTasksByName(){
    HTMLlist.innerHTML = "";

    taskList.sort(function(a, b) {
        return a.name.localeCompare(b.name);
        
    } );

    taskList.forEach(function(task){
        task.create();

    })

}

function sortTasksByDeadline(){
    HTMLlist.innerHTML = "";

    taskList.sort(function(a, b) {
        return a.deadline - b.deadline;

    } );

    taskList.forEach(function(task){
        task.create();

    })

}

function sortTasksByCreateDate(){
    HTMLlist.innerHTML = "";

    taskList.sort(function(a, b) {
        return a.createDate - b.createDate;

    } );

    taskList.forEach(function(task){
        task.create();

    })

}

function sortTasksByCategory(){
    HTMLlist.innerHTML = "";

    taskList.sort(function(a, b) {
        return a.category.localeCompare(b.category);

    } );

    taskList.forEach(function(task){
        task.create();

    })

}

//disclaimer for running on smaller devices
function disclaimer() {
    var minwidth = window.matchMedia("(max-width: 999px)");
    if (minwidth.matches) {
        alert("This page was not meant for tablets or mobile devices.\n Recommended to visit on a desktop with minimum 1000px width. \n~Sorry for the bad UX!");
    }
}