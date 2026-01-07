let users = [];

let usersContainer = document.getElementById('usersContainer');
let alert = document.getElementById('alert');

function renderUsers(){
    usersContainer.innerText = "";
    users.forEach(user => {

        let div = document.createElement('div');
        let divUserDetails = document.createElement('div');
        let spanRemoveBtn = document.createElement('span');
        let name = document.createElement('p');
        let email = document.createElement('p');
        div.classList.add('user');
        name.innerText = user.name;
        email.innerText = user.email;
        divUserDetails.classList.add('userDetails');
        spanRemoveBtn.classList.add('removeBtn');
        spanRemoveBtn.innerText='x';
        div.appendChild(divUserDetails);
        div.appendChild(spanRemoveBtn);
        usersContainer.appendChild(div);
        divUserDetails.appendChild(name);
        divUserDetails.appendChild(email);
        
    });
        
}

function doesUserExist(email)
{
    let user = users.filter(user=>user.email==email);

    return user.length > 0  ?true:false;
}
function hideAlert(){
    setTimeout(()=>{
        alert.classList.remove('success','danger');
    },3000)
}
function addUser(){
    let name=document.getElementById('name');
    let email = document.getElementById('email');
    let user = {
        name: name.value,
        email:email.value
    };
    let userExist = doesUserExist(email.value);
    if(!userExist){
        users.push(user);
        alert.classList.add('success');
        alert.innerText="User Added Successfully";
        hideAlert();
    }
    else{
        alert.classList.add('danger');
        alert.innerText="User Email Already Exist";
        hideAlert();
    }
    

    renderUsers();

}