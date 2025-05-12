document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const Picture = (id, name) => {
    const url = `https://picsum.photos/id/${id}/200/200`;
    return `
      <figure>
        <img src="${url}" alt="Imagen de ${name}">
        <figcaption>${name}</figcaption>
      </figure>
    `;
  };

  // Insertamos varias imágenes
  app.innerHTML = 
    Picture(1, "John") + 
    Picture(2, "Mary") + 
    Picture(3, "Paul");

  // Seleccionamos todas las imágenes
  const lista = app.querySelectorAll("img");
  console.log(lista);

  // Al hacer click, la imagen cambia de forma
  lista.forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("redonda");
    });
  });
});