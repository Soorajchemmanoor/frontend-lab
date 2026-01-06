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