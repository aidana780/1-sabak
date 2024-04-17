const start = document.querySelector("#start")
const btns = document.querySelectorAll("button")
console.log(start.innerHTML);

let count = 0;

btns [0].onclick = () =>{
    count++; 
    start.innerHTML= count;
    start.style.color = "green"
}
 
btns[1].onclick = () =>{
    if(count > 0);{
    count--;
    start.innerHTML=count;
    start.style.color = "green"}
     
}
btns[2].onclick = () =>{
    count =0;
    start.innerHTML=count;
    start.style.color="green"
}