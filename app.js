const usertask=document.querySelector(".newtask");
const taskS=document.querySelector(".tasks");

let allTask=[];
const editName=(index)=>{
    let editVlu=prompt("Enter Your new task?")
    if (editVlu.trim().length>0){
        allTask[index].task=editVlu
        showTask()
    }
}

const deleteRow=(index)=>{
    allTask.splice(index,1)
    showTask()
}
function showTask(){
    taskS.innerHTML=""
    allTask.map((item,index)=>{
        taskS.innerHTML+=`<tr>
        <td>${item.task}<button onclick="editName(${index})">Edit</button> <button onclick="deleteRow(${index})">Delete </button></td>
        </tr>`
    })
}

function addTask(){
    if (usertask.value.trim()==""){
        alert("You need to enter the task")
    }
    else{
        allTask=[...allTask,{"task": usertask.value}]
        usertask.value=""
        showTask()
    }
}

const addBtn=document.querySelector(".addBtn");
addBtn.addEventListener(`click`,addTask);

 