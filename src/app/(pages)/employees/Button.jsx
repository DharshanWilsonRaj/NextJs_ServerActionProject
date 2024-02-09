
'use client'
import React from 'react'


const Button = ({ id, handleDelete, ...otherProps }) => {
    return (
        <button
            onClick={() => handleDelete(id)}
            {...otherProps}>
            Delete
        </button>

    )
}

export default Button
