console.log("Inicio");

const mostrar = () => {
    console.log("los parametros");
    let user = document.getElementById("user");
    let password = document.getElementById("password");
    console.log(user.value);
    console.log(password.value);

    let formulario = document.getElementsByTagName("form");
    console.log(formulario)
    user.setAttribute("name","q")
    password.setAttribute("name","password")
    formulario[0].setAttribute("action","https://google.com/search")
    formulario[0].submit();
};

const boton = document.getElementById("Enviar")
boton.addEventListener("click", mostrar);

