import React, { useState, useEffect } from 'react'

function Time({ timeShiftInMinutes }) {
    const [timeNow, setTimeNow] = useState(Date.now())

    useEffect(() => {
        setTimeout(() => {
            setTimeNow(Date.now())
        }, 1000)
    })

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC'
    }
    const dateNow = new Date(timeNow + timeShiftInMinutes * 1000)
    return dateNow.toLocaleString('en-GB', options)
}

export default Time
