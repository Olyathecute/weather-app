import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Time from './Parametrs/Time'
import Temp from './Parametrs/Temp'

function CityInfo({ city }) {
    const [timeShiftInMinutes, setTimeShift] = useState(0)
    const [temperature, setTemp] = useState(0)

    const params = { q: city, appid: '551e7031a4f510aa51a53539ff692e5c' }
    useEffect(() => {
        axios
            .get('https://api.openweathermap.org/data/2.5/weather', { params })
            .then(res => {
                console.log(res)
                setTimeShift(res.data.timezone)
                setTemp(res.data.main.temp)
            })
            .catch(error => console.log(error))
    }, [city])

    return (
        <div className="App">
            <Time timeShiftInMinutes={timeShiftInMinutes} />
            <p>{city}</p>
            <Temp temperature={temperature} />
        </div>
    ) // add loader to not display components with default values
}

export default CityInfo
