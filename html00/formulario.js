console.log("Inicio");

const boton = document.getElementById("Enviar")

console.log(boton);

boton.addEventListener("click", 
    () => {
        console.log("los parametros")
        let user = document.getElementById("user")
        let password = document.getElementById("password")
        console.log(user.value)
        console.log(password.value)
    }
)