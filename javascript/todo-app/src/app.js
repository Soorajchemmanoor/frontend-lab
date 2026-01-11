let ToDos = [];
let i=0;
document.querySelector('#showAddTask').addEventListener('click',()=>{
    let addTaskContainer = document.getElementById('addTaskContainer');
    addTaskContainer.classList.toggle('opacity-0'); 
    addTaskContainer.classList.toggle('scale-0');
    addTaskContainer.classList.toggle('pointer-events-none')
    
});
