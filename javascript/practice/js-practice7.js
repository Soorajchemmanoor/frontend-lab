const indDay1 = new Date(1947, 7,15);

console.log(indDay1);


const indDay2 = new Date(1947, 7,15).toString();
console.log(indDay2);

let opt = confirm("Do you want see the indian indipendace day");

if(opt)
{
    let name = prompt('Enter your name?');
    alert(`hi ${name}! ${indDay2}`);
}
else
    alert("Bie! thanks for the confirmatin");