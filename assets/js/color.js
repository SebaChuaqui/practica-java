let buttons = document.querySelectorAll('.colorBoton')
let buttonsArray = Array.from(buttons)

let contenido = document.getElementById('contenido')
let mensaje = document.getElementById('mensajeColor')

buttons.forEach( (btn) => {
    btn.addEventListener('click', () => {
        mensaje.classList.remove('show')
        changeColor(btn)
    })
})

const changeColor = (boton) => {
    let color = boton.style.backgroundColor
    contenido.style.backgroundColor = color
    mensaje.innerHTML = color
    mensaje.classList.add('show')
}