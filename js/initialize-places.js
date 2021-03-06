// Selector de Lugares mediante imágenes

function inicializarLugares() {
    let titulo = document.createElement("h3");
    titulo.innerText = "Estos son nuestros Trekkings disponibles";
    document.getElementById("lugares").appendChild(titulo);

    let select = document.createElement("select");
    select.className = "lugaresTrekking";

    select.onchange = (i) => {
        const infoTrekking = salidas.find(item => item.id == i.target.value);
        const ficha = new Ficha (infoTrekking);
        if (infoTrekking) {
            Swal.fire({
                title: ficha.nombre,
                text: ficha.getInfo(),
                imageUrl: ficha.imagen,
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: '',
            })
        }
    } 

    select.innerHTML = "<option>Seleccione una opcion</option>";

    for (let index = 0; index < salidas.length; index++) {
        select.innerHTML += `<option value="${salidas[index].id}">${salidas[index].nombre}</option>`;
    }

    document.getElementById("lugares").appendChild(select);
}