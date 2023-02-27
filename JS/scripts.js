const btn = document.getElementById("send")


function printform() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    console.log(name)
    console.log(email)
    console.log(message)
    alert("Se rellenaran los campos debajo del formulario con los datos ingresados")


/*document.getElementById("send").addEventListener.onclick = function printform()
*/
document.getElementById("nameform").innerHTML = name;
document.getElementById("emailform").innerHTML = email;
document.getElementById("msgform").innerHTML = message;
}