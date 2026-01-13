let ToDos = [];

const toast = document.getElementById("todo-alert");
let toastMsg = ""

if(!localStorage.getItem("ToDos"))
{
    
    localStorage.setItem("ToDos", JSON.stringify(ToDos));
}
else{
    ToDos = JSON.parse(localStorage.getItem("ToDos"))
   
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
        'date':date
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