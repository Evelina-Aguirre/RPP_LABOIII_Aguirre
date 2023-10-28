
const $btnAgregar = document.getElementById("btnAgregar");
const $btnEliminar = document.getElementById("btnEliminar");


export function cargarFormulario(formulario, persona) {

    formulario.txtId.value = persona.id;
    formulario.txtNombre.value = persona.nombre;
    formulario.txtApellido.value = persona.apellido;
    formulario.txtEdad.value = persona.edad;

    for (const key in persona) {
        if (key == "robos") {
            const txtEnemigo = document.getElementById("txtEnemigo");
            const txtRobos = document.getElementById("txtRobos");
            const txtAsesinato = document.getElementById("txtAsesinatos");
            txtEnemigo.value=persona.enemigo;
            txtRobos.value = persona.robos;
            txtAsesinato.value = persona.asesinatos;

        }
        if (key == "ciudad") {
            const txtAlterego = document.getElementById("txtAlterego");
            const txtCiudad = document.getElementById("txtCiudad");
            const txtPublicado = document.getElementById("txtPublicado");
            txtAlterego.value=persona.alterego;
            txtCiudad.value = persona.ciudad;
            txtPublicado.value = persona.publicado;
        }
    }

}

export function vaciarFormulario(formulario) {
    formulario.txtId.value = "";
    formulario.txtNombre.value = "";
    formulario.txtApellido.value = "";
    cargaEdad();
    cargaTipo();
    camposSegunTipo.style.display = "none";
    $btnAgregar.value = "Agregar";
    $btnEliminar.disabled = true;

}

document.addEventListener("DOMContentLoaded", cargaEdad);
document.addEventListener("DOMContentLoaded", cargaTipo);


function cargaEdad() {
    var selectEdad = document.getElementById("txtEdad");
    for (var i = 0; i <= 110; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectEdad.appendChild(option);
    }
}

export function cargaTipo() {

    var selectTipo = document.getElementById("tipo");
    while (selectTipo.firstChild) {
        selectTipo.removeChild(selectTipo.firstChild);
    }
    var datos = [{
      id: "superheroe", nombre: "Superheroe"},
    { id: "villano", nombre: "Villano" }];

    for (var i = 0; i < datos.length; i++) {
        var option = document.createElement("option");
        option.value = datos[i].id;
        option.text = datos[i].nombre;
        selectTipo.appendChild(option);
    }
}