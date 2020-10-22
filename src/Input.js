import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Input({ onInput }) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            // trim - удаляет лишние пробелы
            onInput(value)
            // event.clear()
        }
    }

    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

Input.propTypes = { onInput: PropTypes.func.isRequired }

export default Input
