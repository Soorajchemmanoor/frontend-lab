let nameInput = document.querySelector('input');
let btn = document.querySelector('button');
let form = document.querySelector('#welcomeForm');
let nameSpan = document.querySelector('#name')
btn.addEventListener('click', ()=>{
    
    let name = nameInput.value;
    localStorage.setItem('name', name);
    checkForm()
})

function checkForm(){
    let userExists = 'name' in localStorage;
if(userExists){
    form.classList.add('hidden');
    nameSpan.innerText = localStorage.getItem('name')
}
}

checkForm()
