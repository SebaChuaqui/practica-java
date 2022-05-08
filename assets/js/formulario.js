let formulario = document.getElementById('formulario')
let button = document.getElementById('button')

formulario.addEventListener( 'submit', (e) => {
    e.preventDefault()

    limpia()

    if (valida()) {
        mensajeEnviado()
    } else {
        mensajeFallido()
    }

})

const valida = () => {

    let nombre = document.getElementById('nombre').value
    let asunto = document.getElementById('asunto').value
    let mensaje = document.getElementById('mensaje').value
    let validar = true

    if ( nombre == '' ) {
        validar = false
        document.querySelector('.errorNombre').innerHTML = 'Campo Nombre Obligatorio.'
        
    } else if ( validarTexto(nombre) == false ) {
        validar = false
        document.querySelector('.errorNombre').innerHTML = 'Campo Nombre no debe contener números.'
    }
    
    if ( asunto == '' ) {
        validar = false
        document.querySelector('.errorAsunto').innerHTML = 'Campo Asunto Obligatorio.'
    } else if ( validarTexto(asunto) == false ) {
        validar = false
        document.querySelector('.errorAsunto').innerHTML = 'Campo Asunto no debe contener números.'
    }
    
    if ( mensaje == '' ) {
        validar = false
        document.querySelector('.errorMensaje').innerHTML = 'Campo Mensaje Obligatorio.'
    } else if ( validarTexto(mensaje) == false ) {
        validar = false
        document.querySelector('.errorMensaje').innerHTML = 'Campo Mensaje no debe contener números.'
    }

    return validar

}

const validarTexto = (texto) => {
    let pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*[.,]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)+$/gi
    let textResult = pattern.test(texto)
    return textResult
}

const limpia = () => {
    document.querySelector('.errorNombre').innerHTML = ''
    document.querySelector('.errorAsunto').innerHTML = ''
    document.querySelector('.errorMensaje').innerHTML = ''
}

const mensajeEnviado = () => {
    let msg = document.getElementById('mensajes')
    msg.innerHTML = 'Tu mensaje ha sido enviado con éxito.'
    msg.classList.remove('error')
    msg.classList.add('show', 'exito')
}

const mensajeFallido = () => {
    let msg = document.getElementById('mensajes')
    msg.innerHTML = 'Problema en algunos de los campos'
    msg.classList.remove('exito')
    msg.classList.add('show', 'error')
}