let ToDos = [];

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
    console.log(date);
    ToDos.push(taskDetails);
    console.log(ToDos);
});