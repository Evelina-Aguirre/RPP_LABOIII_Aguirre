import { datos } from "./Datos.js";
import { crearTabla } from "./tabla.js";
import { actualizarStorage } from "./stroraje.js";
import { cargarFormulario, vaciarFormulario, cargaTipo } from "./formulario.js";
import Persona from "./Persona.js";
import { actualizarIds } from "./Persona.js";

class Villano extends Persona {

    constructor(id, nombre, apellido, edad, enemigo,robos, asesinatos) {
        super(id, nombre, apellido, edad);

        this.enemigo=enemigo;
        this.robos = robos;
        this.asesinatos = asesinatos;
    }
}

class Superheroe extends Persona {

    constructor(id, nombre, apellido, edad, alterego,ciudad, publicado) {
        super(id, nombre, apellido, edad,);

        this.alterego=alterego;
        this.ciudad = ciudad;
        this.publicado = publicado;
    }
}


const tabla = document.getElementById("tabla");
const actualizarTabla = (datos) => {
    tabla.innerHTML = '';
    tabla.appendChild(crearTabla(datos));
}
actualizarTabla(datos);


const btnAgregar= document.getElementById("btnAgregarNuevo");
const seccionFormulario = document.querySelector(".Seccion-Formulario");

btnAgregar.addEventListener("click", function() {
    seccionFormulario.style.display = "block";
});

//CARGA CAMPOS DE UN FIELDSET VACIO SEGÚN TIPO SELECCIONADO
let tipoUsuarioSelect = document.getElementById("tipo");
let camposSegunTipo = document.getElementById("camposSegunTipo");

tipoUsuarioSelect.addEventListener("change", function () {

    while (camposSegunTipo.firstChild) {
        camposSegunTipo.removeChild(camposSegunTipo.firstChild);
    }

    if (tipoUsuarioSelect.value === "villano") {
        camposSegunTipo.style.display = "block";
        cargarcamposTipoUsuarioUno();
    }
    else if (tipoUsuarioSelect.value === "superheroe") {
        camposSegunTipo.style.display = "block";
        cargarcamposTipoUsuarioDos();
    }
})

function cargarcamposTipoUsuarioUno() {

    let legendVillano = document.createElement("legend");
    legendVillano.textContent = "Villano";

    let labelEnemigo = document.createElement("label");
    labelEnemigo.textContent = "Enemigo";
    let inpunEnemigo = document.createElement("input");
    inpunEnemigo.type = "text";
    inpunEnemigo.id = "txtEnemigo";
    inpunEnemigo.name = "txtEnemigo";
    inpunEnemigo.placeholder = "Enemigo";
    inpunEnemigo.required = true;

    let labelRobos = document.createElement("label");
    labelRobos.textContent = "Robos";
    let inpunRobos = document.createElement("input");
    inpunRobos.type = "number";
    inpunRobos.id = "txtRobos";
    inpunRobos.name = "robos";
    inpunRobos.placeholder = "Robos(0-1000000)";
    inpunRobos.min = "0";
    inpunRobos.max = "1000000";
    inpunRobos.required = true;
    let errorSpanAlt = document.createElement("span");
    errorSpanAlt.id = "robosError";
    errorSpanAlt.className = "error";

    let labelAsesinatos = document.createElement("label");
    labelAsesinatos.textContent = "Asesinatos";

    let inpuntAsesinatos = document.createElement("input");
    inpuntAsesinatos.type = "number";
    inpuntAsesinatos.id = "txtAsesinatos";
    inpuntAsesinatos.name = "txtAsesinatos";
    inpuntAsesinatos.placeholder = "Asesinatos (0-1000000)";
    inpuntAsesinatos.min = "0";
    inpuntAsesinatos.max = "1000000";
    inpuntAsesinatos.required = true;
    let errorAsesinatos = document.createElement("span");
    errorAsesinatos.id = "asesinatosError";
    errorAsesinatos.className = "error";

    camposSegunTipo.appendChild(labelEnemigo);
    camposSegunTipo.appendChild(inpunEnemigo);
    camposSegunTipo.appendChild(errorSpanAlt);
    camposSegunTipo.appendChild(errorAsesinatos);
    camposSegunTipo.appendChild(legendVillano);
    camposSegunTipo.appendChild(labelRobos);
    camposSegunTipo.appendChild(inpunRobos);
    camposSegunTipo.appendChild(labelAsesinatos);
    camposSegunTipo.appendChild(inpuntAsesinatos);
}

function cargarcamposTipoUsuarioDos() {

    let legendSuperheroe = document.createElement("legend");
    legendSuperheroe.textContent = "Superheroe";

    let labelAlterego = document.createElement("label");
    labelAlterego.textContent = "Alterego";
    let inpunAlterego = document.createElement("input");
    inpunAlterego.type = "text";
    inpunAlterego.id = "txtAlterego";
    inpunAlterego.name = "txtAlterego";
    inpunAlterego.placeholder = "Alterego";
    inpunAlterego.required = true;

    let labelCiudad = document.createElement("label");
    labelCiudad.textContent = "Ciudad";
    let inpunCiudad = document.createElement("input");
    inpunCiudad.type = "text";
    inpunCiudad.id = "txtCiudad";
    inpunCiudad.name = "txtCiudad";
    inpunCiudad.placeholder = "Ciudad";
    inpunCiudad.required = true;
    let errorCiudad = document.createElement("span");
    errorCiudad.id = "ciudadError";
    errorCiudad.className = "error";


    let labelPublicado = document.createElement("label");
    labelPublicado.textContent = "Publicado";

    let inpuntPublicado = document.createElement("input");
    inpuntPublicado.type = "number";
    inpuntPublicado.id = "txtPublicado";
    inpuntPublicado.name = "txtPublicado";
    inpuntPublicado.placeholder = "Fecha publicación (1900-2023)";
    inpuntPublicado.min = "1900";
    inpuntPublicado.max = "2023";
    inpuntPublicado.required = true;
    let errorPublicado= document.createElement("span");
    errorPublicado.id = "publicadoError";
    errorPublicado.className = "error";

    camposSegunTipo.appendChild(labelAlterego);
    camposSegunTipo.appendChild(inpunAlterego);
    camposSegunTipo.appendChild(errorCiudad);
    camposSegunTipo.appendChild(errorPublicado);
    camposSegunTipo.appendChild(legendSuperheroe);
    camposSegunTipo.appendChild(labelCiudad);
    camposSegunTipo.appendChild(inpunCiudad);
    camposSegunTipo.appendChild(labelPublicado);
    camposSegunTipo.appendChild(inpuntPublicado);
}




////////////////////////////////////// ABM A PARTIR DE FORM ////////////////////////////////////////////

const $formulario = document.forms[0];
const $btnAgregar = document.getElementById("btnAgregar");
const $btnEliminar = document.getElementById("btnEliminar");

window.addEventListener("click", handlerClick);

function handlerClick(e) {
    if (e.target.nodeName == "TD") {

        seccionFormulario.style.display = "block";
        while (camposSegunTipo.firstChild) {
            camposSegunTipo.removeChild(camposSegunTipo.firstChild);
        }
        camposSegunTipo.style.display = "none";
        const id = e.target.parentElement.dataset.id;
        if (e.target.matches("td")) {
            const id = e.target.parentElement.dataset.id;
            const selectedPersona = datos.find((per) => {
                return per.id == id;
            })

            if (selectedPersona.ciudad) {
                tipoUsuarioSelect.value = "superheroe";
                camposSegunTipo.style.display = "block";
                cargarcamposTipoUsuarioDos();
                
            }
            if (selectedPersona.robos) {
                tipoUsuarioSelect.value = "villano";
                camposSegunTipo.style.display = "block";
                cargarcamposTipoUsuarioUno();
            }
            cargarFormulario($formulario, selectedPersona);

            $btnAgregar.value = "Modificar";
            $btnEliminar.disabled = false;
        }

    }
    if (e.target.matches("input[type='button'][value='Eliminar'][id='btnEliminar']")) {

        handlerDelete(parseInt($formulario.txtId.value));
        seccionFormulario.style.display = "none";
    }

    if (e.target.matches("input[type='button'][value='Cancelar']")) {

        vaciarFormulario($formulario);
        seccionFormulario.style.display = "none";
       
    }

}



$formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log($formulario.txtId.value);
    var selectTipo = document.getElementById("tipo");

    const { txtId, txtNombre, txtApellido, txtEdad,  txtAlterego, txtCiudad, txtPublicado ,txtEnemigo, txtRobos, txtAsesinatos} = $formulario;

    if (txtId.value === "") {
        if (window.getComputedStyle(camposSegunTipo).display === "block") {
            if (selectTipo.value == "villano") {
                const newPersona = new Villano("", txtNombre.value, txtApellido.value, parseInt(txtEdad.value),txtEnemigo.value, parseInt(txtRobos.value), parseInt(txtAsesinatos.value));
                handlerCreate(newPersona);

            } else if (selectTipo.value == "superheroe") {
                const newPersona = new Superheroe("", txtNombre.value, txtApellido.value, txtEdad.value,txtAlterego.value, txtCiudad.value, txtPublicado.value);
                handlerCreate(newPersona);
            }
            vaciarFormulario($formulario);
            seccionFormulario.style.display = "none";
        } else {
            document.getElementById("errorMensaje").style.display = "block";
        }
        setTimeout(function () {
            document.getElementById("errorMensaje").style.display = "none";
        }, 4000);
    } else {
        if (selectTipo.value == "villano") {
            const newPersona = new Villano(txtId.value,txtNombre.value, txtApellido.value, parseInt(txtEdad.value),txtEnemigo.value, parseInt(txtRobos.value), parseInt(txtAsesinatos.value));
            handlerUpdate(newPersona);

        } else if (selectTipo.value == "superheroe") {
            const newPersona = new Superheroe(txtId.value, txtNombre.value, txtApellido.value, parseInt(txtEdad.value),txtAlterego.value, txtCiudad.value, txtPublicado.value);
            handlerUpdate(newPersona);
        }
        vaciarFormulario($formulario);
        seccionFormulario.style.display = "none";
    }


});

function handlerCreate(nuevoPersona) {

    datos.push(nuevoPersona);
    actualizarStorage("datos", nuevoPersona);
    actualizarTabla(datos);
}


function handlerUpdate(editPersona) {
    let index = datos.findIndex((veh) => veh.id == editPersona.id);
    if (index !== -1) {
        let datosActualizados = datos.map((Persona, i) => {
            if (i === index) {
                return editPersona;
            }
            return Persona;
        });
        datos[index] = editPersona;

        actualizarStorage("datos", datos);
        actualizarTabla(datos);
    }

}

function handlerDelete(id) {

    const confirmDelete = confirm("¿Está seguro de que desea eliminar esta entrada?");
    if (confirmDelete) {
        let index = datos.findIndex((vehi) => vehi.id == id);
        datos.splice(index, 1);
        actualizarStorage("datos", datos);
        actualizarIds(datos)
        actualizarTabla(datos);
        $formulario.reset();
        $formulario.txtId.value = "";
    }
}



const checkboxes = document.querySelectorAll(".cheks input[type='checkbox']");
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {

        tabla.querySelectorAll("th").forEach((th, index) => {

            if (checkboxes[index].checked) {

                th.style.display = "table-cell";
                tabla.querySelectorAll(`tr td:nth-child(${index + 1})`).forEach((td) => {
                    td.style.display = "table-cell";
                });
            } else {

                th.style.display = "none";
                tabla.querySelectorAll(`tr td:nth-child(${index + 1})`).forEach((td) => {
                    td.style.display = "none";
                });
            }
        });
    });
});

//////////////////////////////////// PROMEDIO //////////////////////////////
function calcularPromedio(Personas) {
    const total = Personas.reduce(
        (total, Persona) => total + parseInt(Persona.edad),
        0
    );
    const promedio = total / datos.length;

    const txtPromedio = document.getElementById("txtPromedio");
    txtPromedio.value = isNaN(promedio) ? "No hay velocidades válidas" : promedio.toFixed(2);
}


//////////////////////////////////FILTRA SEGÚN TIPO Y CARGA LA TABLA //////////////////////////////////////

const selectFiltrarPor = document.getElementById('FiltrarPor');
const btnCalcular = document.getElementById("btnPromedio");

selectFiltrarPor.addEventListener('change', function () {

    const valorSeleccionado = selectFiltrarPor.value;

    const resultado = datos.reduce((acumulador, persona) => {
        if (persona.alterego !== undefined) {
            acumulador.alterego.push(persona);
        }
        if (persona.enemigo !== undefined) {
            acumulador.enemigo.push(persona);
        }
        return acumulador;
    }, { alterego: [], enemigo: [] });
    console.log(resultado.enemigo);

    console.log(valorSeleccionado);
    if (valorSeleccionado === 'villano') {
        tabla.innerHTML = '';
        actualizarTabla(resultado.enemigo);

    } else if (valorSeleccionado === 'superheroe') {
        tabla.innerHTML = '';
        actualizarTabla(resultado.alterego);
    } else {
        tabla.innerHTML = '';
        actualizarTabla(datos);
    }

    btnCalcular.addEventListener("click", function () {
        if (valorSeleccionado === 'villano') {
            calcularPromedio(resultado.enemigo);

        } else if (valorSeleccionado === 'superheroe') {
            calcularPromedio(resultado.alterego);
        } else {
            calcularPromedio(datos);
        }
    });
});

btnCalcular.addEventListener("click", function () {

    calcularPromedio(datos);

});

















