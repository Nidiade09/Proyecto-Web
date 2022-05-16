
const el_contenedor =  document.getElementById("contenido-principal");

function obtener_info(inf) {
  let url = "datos.json" + pokemon;
  fetch(datos.json).then(function(respuesta) {
    return respuesta.json();
  }).then(function(datos) {
    // Crear división
    let div = document.createElement("div");
    div.classList.add("inf-card");
    // Crear el nombre del Pkmn
    let texto = document.createElement("p");
    texto.innerHTML = datos["name"];
    // Crear la imagen del Pkmn
    let imagen = document.createElement("img");
    imagen.src = datos["sprites"]["front_default"];
    // Agregar el Pkmn al contenedor
    div.appendChild(texto);
    div.appendChild(imagen);
    el_contenedor.appendChild(div);
  }).catch(function(error) {
    console.log(error);
  });
}

obtener_info(1);
obtener_info(6);
obtener_info(6);
obtener_info(2);

