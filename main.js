const name = document.getElementById("name")
const email = document.getElementById("email")
const msj = document.getElementById("msj")
const btn = document.getElementById("btn")
const del = document.getElementById("btnDel")
const textChange = document.getElementById("textChange")

// función que cuando envíes el formulario muestre por consola los datos de contacto rellenados en un objeto de JS
function mostrarDatos () {
    
    const usuario = {
        name: name.value,
        email: email.value,
        mensaje: msj.value
    }
    
    const stringUser = JSON.stringify(usuario);

    console.log(usuario);

    // Guardar en Local Storage el objeto consoleado antes (sólo guarda un usuario)
    localStorage.setItem("InfoUsuario", stringUser)

    // Muestra el usuario que has guardado en el DOM (en el HTML)
    let localParseado = JSON.parse(localStorage.getItem("InfoUsuario"))
    textChange.innerText = localParseado.name + " " + localParseado.email + " " + localParseado.mensaje
    
    //Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
    
}

btn.addEventListener("click", mostrarDatos)

// Crea un botón para borrar todos los contactos guardados en Local Storage
del.addEventListener("click", (e) => {
    e.preventDefault
    localStorage.clear()
})