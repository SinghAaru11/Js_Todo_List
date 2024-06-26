//target elements to manipulate.
let addbtn = document.querySelector("#add-task");
let addpbtn = document.querySelector("#add-p-task");
let deletebtn = document.querySelector("#delete-task");
let tasklist = document.querySelector(".task-list");
let input=document.getElementById("task");
let text = ""

function inputchange(elem){
    text = elem.target.value///?
}

function FORMNEWTASK(){
    //creating new-Html-Element through js file by " .createElement(" ") method "
    let divelement = document.createElement("div")
    let newlist = document.createElement("li")
    let newcompletebtn = document.createElement("button")
    let newdeletebtn = document.createElement("button")
    //inside newly formed html elements providing class.
    divelement.classList.add("todo")
    newlist.setAttribute("class","todo-item")
    newcompletebtn.classList.add("complete-btn")
    newdeletebtn.classList.add("delete-btn")

//Setting text-content of Html-tag by tagname.textContent = "anytext" method.
newlist.textContent=text //// ?
newcompletebtn.textContent="Completed"
newdeletebtn.textContent="Delete"


//All newly added Html element appending to div element to wrap list,button Htmltag.
divelement.append(newlist)
divelement.append(newcompletebtn)
divelement.append(newdeletebtn)

return divelement;

}



function ADDTASK(){

    if(text.length){
        let divelement = FORMNEWTASK()
tasklist.append(divelement)
input.value = ""
text = ""

}
}

function ADDPTASK(){
    if(text.length){
      let divelement = FORMNEWTASK();
        tasklist.prepend(divelement);
        input.value = ""
        text = ""
        // text.style.FontSize="50px".....?
    
}}

function DELETEALLTASK(){
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild)
    }
 
}
function performtaskoperation(elem){
    let currentItem = elem.target;  //what is target ?
    
    if(currentItem.classList[0] === "delete-btn"){
        let parent = currentItem.parentElement;
        parent.remove();
    }
    if(currentItem.classList[0]==="complete-btn"){
        let parent = currentItem.parentElement;
        parent.style.opacity="0.3"
        parent.style.pointerEvents = "none"
    }
}

input.addEventListener('change',inputchange)
addbtn.addEventListener('click',ADDTASK)
addpbtn.addEventListener('click',ADDPTASK)
deletebtn.addEventListener('click',DELETEALLTASK)
tasklist.addEventListener('click',performtaskoperation)