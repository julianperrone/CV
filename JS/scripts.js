function send(onclick=document.getElementById("send")) {
    var nombre= document.getElementById("name").value;
    var correo= document.getElementById("email").value;
    var mensaje= document.getElementById("message").value;
    document.getElementById("nameform").innerHTML = nombre
    document.getElementById("emailform").innerHTML = correo
    document.getElementById("msgform").innerHTML = mensaje
}
/*
onclick=document.getElementById("send")
    var nombre= document.getElementById("name").value;
    var correo= document.getElementById("email").value;
    var mensaje= document.getElementById("message").value;
    document.getElementById("nameform").innerHTML = nombre
    document.getElementById("emailform").innerHTML = correo
    document.getElementById("msgform").innerHTML = mensaje

*/