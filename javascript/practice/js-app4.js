// onchange
// let inputs = document.querySelectorAll('input');
// inputs.forEach((input)=>{
//     input.addEventListener('change', ()=>{
//         document.getElementById('words').innerText = input.value;
//     })
// })

// onkeyup and onkeydown

let input = document.querySelector('input');
input.addEventListener('keyup', ()=>{
     document.getElementById('words').innerText = input.value;
})


 let alert = document.querySelector('.alert')
let demo = document.querySelector('.demo');
demo.addEventListener('mouseover', ()=>{
    alert.innerText = 'cursor is inside demo box';
})
demo.addEventListener('mouseout', ()=>{
    alert.innerText = 'cursor is outside demo box';
})