const equipo1=document.getElementById("e1");

fetch('base.json')
.then(response=> response.json())
.then(data =>{
    equipo1.textContent=data.equipo1;
})