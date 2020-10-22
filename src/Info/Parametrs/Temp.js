import React from 'react'

function Temp({ temperature }) {
    return <p>{(temperature - 273.15).toFixed(2)} C</p>
}

export default Temp
