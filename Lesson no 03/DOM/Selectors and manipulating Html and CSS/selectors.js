let btn = document.getElementById('btn');

console.log(btn.innerHTML)
console.log(btn.innerText)
// How to manipulate 
// manipulate inner text content

document.getElementById('btn').textContent = "Click the button." ;

btn.style.color = "Red";
btn.style.backgroundColor = "black";
btn.style.padding = "8px";
btn.style.borderRadius = "15px";


let para2 = document.getElementById("para2");
para2.style.color = "Green";
para2.style.backgroundColor = "black";
para2.style.padding = "15px";

console.log(para2.innerText)

document.getElementById('para2').textContent = "Hi, i change the content of this paragraph via DOM." ; 