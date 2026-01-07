let users = [];

let usersContainer = document.getElementById('usersContainer');
let alert = document.getElementById('alert');

function renderUsers(){
    usersContainer.innerText = "";
    i=0;
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
        spanRemoveBtn.setAttribute('reder-val',i);
        i++;
        div.appendChild(divUserDetails);
        div.appendChild(spanRemoveBtn);
        usersContainer.appendChild(div);
        divUserDetails.appendChild(name);
        divUserDetails.appendChild(email);


        
        
    });

    let removeBtn = document.querySelectorAll('.removeBtn');
    
    removeBtn.forEach((rBtn)=>{
        rBtn.addEventListener('click', (e)=>{
            removeUser(rBtn.getAttribute('reder-val'));
        })
    });
        
}

function removeUser(renderVal){
    let rEl = users.splice(renderVal, 1);
    if(rEl[0]){
    
        alert.classList.add('success');
        alert.innerText="User Removed Successfully";
        hideAlert();
    }
    else{
        alert.classList.add('danger');
        alert.innerText="User is not Exist";
        hideAlert();
    }
    
    renderUsers();
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