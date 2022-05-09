let btnSuma = document.getElementById('adicion')
let btnResta = document.getElementById('sustraccion')

let respuesta_1 = document.getElementById('respuesta_1')
let respuesta_2 = document.getElementById('respuesta_2')

btnSuma.addEventListener('click', e => {
    e.preventDefault()
    
    let numero1 = parseInt(document.getElementById('numero_1').value)
    let numero2 = parseInt(document.getElementById('numero_2').value)
    
    adicion(numero1, numero2)

    document.getElementById('resultado').classList.add('show')

})

btnResta.addEventListener('click', e => {
    e.preventDefault()
    
    let numero1 = parseInt(document.getElementById('numero_1').value)
    let numero2 = parseInt(document.getElementById('numero_2').value)
    
    sustraccion(numero1, numero2)

    document.getElementById('resultado').classList.add('show')

})

const adicion = (num1, num2) => {
    let respuestaSuma = num1 + num2
    respuesta_1.innerHTML = 'La suma es:'
    respuesta_2.innerHTML = respuestaSuma
}

const sustraccion = (num1, num2) => {
    let respuestaResta = num1 - num2
    if ( respuestaResta < 0 ) {
        respuestaResta = 0
    }
    respuesta_1.innerHTML = 'La resta es:'
    respuesta_2.innerHTML = respuestaResta
}