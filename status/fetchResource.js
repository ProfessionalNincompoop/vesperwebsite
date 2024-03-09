console.log("hellow wolrd");
const response = await fetch("IP/serverStatus/CPU");
const CPU = await response.json();
console.log(todos);
document.getElementById("CPU").innerHTML = 'CPU Used: ' +CPU+'%/100% <br>';