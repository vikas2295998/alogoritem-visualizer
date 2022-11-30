

// var LOB = new (require('lob')) (API_KEY);
console.log('Success?');
let obj={
    name:"vishal",
    class:"tenth",
    subject:"physics"
}
let vikas={
    name:"vikas",
    class:"btech",
    subject:"python"
}
function saveData(ob){
    function helper(err){
        if(err){
            console.log(err);
            return;
        }
    }
   
    var fs=require('fs');

    var data=JSON.parse(fs.readFileSync('message.txt'));
    
    var data=JSON.parse('message.txt');
    data.push(ob);
    let newdata=JSON.stringify(data,null,2);
    fs.writeFile('message.txt',newdata,helper);
}
const addData=(ev)=>{
    ev.preventDefault();
console.log("vikassssssssssssssssssssss");
// let obj = {
//     id: Date.now(),
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     subject: document.getElementById('subject').value,
//     message: document.getElementById('message').value
// }

saveData(obj);
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addData);
});