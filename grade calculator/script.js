

function calcy(){
     let phy=document.getElementById("phy").value;
let chem=document.getElementById("chem").value;
let math=document.getElementById("math").value;
let hindi=document.getElementById("hindi").value;
let eng=document.getElementById("eng").value;

let total=parseFloat(phy)+parseFloat(chem)+parseFloat(math)+parseFloat(hindi)+parseFloat(eng);
console.log(total);
let grade="A";
document.getElementById('msg').innerHTML=`you are passed ,your parsent is ${(Math.round((total/500)*10000))/100}% and
your grade is ${grade}`;
      alert("vikas");
  }
//   console.log("akjfk");
//   document.getElementById('btn').addEventListener('click',()=>{
//       alert("massage");
//   });