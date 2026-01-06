// onchange
let inputs = document.querySelectorAll('input');
inputs.forEach((input)=>{
    input.addEventListener('change', ()=>{
        document.getElementById('words').innerText = input.value;
    })
})

