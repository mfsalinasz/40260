document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("Enviar");
  const user = document.getElementById("user");
  const password = document.getElementById("password");
  const formulario = document.getElementById("loginForm");

  const mostrar = () => {
    // Validaciones básicas
    if (user.value.trim() === "" || password.value.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    console.log("Usuario:", user.value);
    console.log("Contraseña:", password.value);

    // Preparar atributos para envío
    user.setAttribute("name", "q");
    password.setAttribute("name", "password");
    formulario.setAttribute("action", "https://google.com/search");

    // Enviar formulario
    formulario.submit();
  };

  boton.addEventListener("click", mostrar);
});