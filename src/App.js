import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'
import Input from './Input'
import CityInfo from './Info/CityInfo'

function App() {
    const [city, setCity] = useState('')

    function inputCity(city) {
        setCity(city)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="Data">
                <Input onInput={inputCity} />
                {city && <CityInfo city={city} />}
            </div>
        </div>
    )
}

export default App

// New York    Moscow   Sayanogorsk
