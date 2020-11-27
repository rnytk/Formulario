//se obtiene el valor de los input y el valor almacena en una constante

const nombre = document.getElementById("name")
const apellido = document.getElementById("lastName")
const edad = document.getElementById("year")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

// Funncion que se activa cuando se envia el formulario
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    // expresion regular que se utiliza para validar el correo
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    // si el nombre tiene menos de 4 caracteres, en nombre no es valido
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <4){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    // si el input se encuentra vacio, muestra el error de edad no es valid
    if(edad.value.length == " "){
        warnings += `La edad no es valido <br>`
        entrar = true
    }
    //Comprueba si el email cumple con el patron de la expresion regular
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    // si los errores son true (verdaderos), mostrara los errores
    if(entrar){
        parrafo.innerHTML = warnings
    //de lo contrario si todo esta correcto, mostrara el mensaje enviado
    }else{
        parrafo.innerHTML = "Enviado"
    }
})