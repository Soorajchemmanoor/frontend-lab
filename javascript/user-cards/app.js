document.querySelector('button').addEventListener('click',()=>{
    getUser();
})
getUser();
async function getUser(){

    let data = await fetch('https://randomuser.me/api');
    let user = await data.json();
    console.log(user);
   document.getElementById('user-img').src=user.results[0].picture.medium;
   document.getElementById('userName').innerText=`${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`;
   document.getElementById('user-img').alt=`${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`;
   document.getElementById('email').innerText=user.results[0].email;
   document.getElementById('cell').innerText=user.results[0].cell;


}