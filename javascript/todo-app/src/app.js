let ToDos = [];

const toDoList = document.querySelector('#toDoList');
const toast = document.getElementById("todo-alert");
let toastMsg = "";


if(!localStorage.getItem("ToDos"))
{
    
    localStorage.setItem("ToDos", JSON.stringify(ToDos));
}
else{
    ToDos = JSON.parse(localStorage.getItem("ToDos"))
   
}

rederToDos()



function rederToDos(){
    toDoList.innerHTML="";
    ToDos.forEach((todo,index)=>{

        if(todo.status == "done"){
            todoBgClass = "bg-red-100 hover:shadow-md";
            todoNameClass = "text-neutral-700";
        }
        else{
            todoBgClass = "border-orange-400";
            todoNameClass = "text-orange-700";
        }

        let todoStruct = `<div class="w-[335px] border  p-3  rounded-xl  hover:cursor-pointer ${todoBgClass}">
            <p class=" font-semibold ${todoNameClass}" >${todo.name}</p>
            <p class="text-[14px]  text-neutral-900 mt-1">${todo.date}</p>
            <div class="flex gap-3">
                <button todo-id="${index}" class="text-neutral-700 text-sm  hover:text-green-700 flex gap-2 mt-3 items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                    </svg>
                    ${(todo.status == "done") ? "Mark as Incomplete" : "Mark as Complete"}
                </button>
                <button class="text-neutral-700 text-sm  hover:text-red-500 flex gap-2 mt-3 items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    Delete
                </button>
            </div>

        </div>`;

        toDoList.innerHTML = toDoList.innerHTML +todoStruct;


    })
}



document.querySelector('#showAddTask').addEventListener('click',()=>{
    let addTaskContainer = document.getElementById('addTaskContainer');
    addTaskContainer.classList.toggle('opacity-0'); 
    addTaskContainer.classList.toggle('scale-0');
    addTaskContainer.classList.toggle('pointer-events-none')
    
});





document.querySelector('#addTask').addEventListener('click',()=>{
    let taskName = document.getElementById('taskName').value; 
    let date = document.getElementById("date").value; 
    let taskDetails = {
        'name':taskName,
        'date':date,
        'status':'pending'
    };

  

    let success = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-circle-fill  text-green-500 " viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>';
    let danger = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ban-fill text-red-500" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M2.71 12.584q.328.378.706.707l9.875-9.875a7 7 0 0 0-.707-.707l-9.875 9.875Z"/></svg>';
    ToDos.push(taskDetails);
    localStorage.setItem("ToDos", JSON.stringify(ToDos));

    if (ToDos.length > 0) 
    {
        toastMsg = "ToDo Added Successfully!";
        toast.innerHTML = `${success} <p class="text-green-600">${toastMsg}</p>`;

        toast.classList.remove(
            "opacity-0",
            "translate-x-6",
            "scale-95",
            "pointer-events-none",
            "bg-red-200"
        );
        toast.classList.add(
            "opacity-100",
            "translate-x-0",
            "scale-100",
            "bg-green-200"
        );

        setTimeout(() => {
            toast.classList.add(
                "opacity-0",
                "translate-x-6",
                "scale-95",
                "pointer-events-none",
                "bg-green-200"
            );
            toast.classList.remove(
                "opacity-100",
                "translate-x-0",
                "scale-100",
                "bg-red-200"
            );
        }, 3000);

        console.log(JSON.parse(localStorage.getItem("ToDos")));
        rederToDos();

    }
    else{
        toastMsg = "Error in Adding ToDo";
        toast.innerHTML = `${danger} <p class="text-red-600">${toastMsg}</p>`;

        toast.classList.remove(
            "opacity-0",
            "translate-x-6",
            "scale-95",
            "pointer-events-none",
            "bg-green-200"
        );
        toast.classList.add(
            "opacity-100",
            "translate-x-0",
            "scale-100",
            "bg-red-200"
        );

        setTimeout(() => {
            toast.classList.add(
                "opacity-0",
                "translate-x-6",
                "scale-95",
                "pointer-events-none",
                "bg-red-200"
            );
            toast.classList.remove(
                "opacity-100",
                "translate-x-0",
                "scale-100",
                "bg-green-200"
            );
        }, 3000);

    }
    

    

    
});