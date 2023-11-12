import React from 'react'
import useClima from '../hooks/useClima'

export const Resultado = () => {

    const {resultado} = useClima()
    const {name, main} = resultado
    // console.log(resultado)

    //grados Kelvin
    const kelvin = 273.15

    return (
        <div className='contenedor clima'>
            <h2>El Clima de {name} es: </h2>
            <p> { parseInt(main.temp - kelvin) } <span>&#x2103;</span></p>

            <div className='temp_min_max'>
                <p>Temperatura Mín: { parseInt(main.temp_min - kelvin) } <span>&#x2103;</span></p>

                <p>Temperatura Máx: { parseInt(main.temp_max - kelvin) } <span>&#x2103;</span></p>
            </div>
        </div>
    )
}
