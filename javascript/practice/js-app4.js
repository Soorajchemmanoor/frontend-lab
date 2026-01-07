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


// let loader = document.querySelector('#loader');
// loader.classList.remove('hidden')
// loader.classList.add('page-loader')
// window.addEventListener('load', ()=>{
//     loader.classList.remove('page-loader')
//     loader.classList.add('hidden')
// })


// scroll
let btn = document.querySelector('.help')
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        btn.classList.add('show')
        console.log('dsmkdmks')
    }
    else{
        btn.classList.remove('show')
    }
})


// let btn = document.querySelector('.help')
// window.addEventListener('scroll', ()=>{
//     console.log(window.scrollY)
// })

