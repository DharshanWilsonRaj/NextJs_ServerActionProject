"use client";
import React from 'react'

const InputElement = (props) => {
    const {
        label,
        placeholder,
        required,
        error,
        type,
        ...otherProps
    } = props;

    const inputProps = {
        className: ` border outline-none border focus:outline-none p-2 rounded text-gray-600   text-sm ${error ? "border-red-500 " : ""}`,
        placeholder,
        label,
        type,
        ...otherProps
    };

    return (
        <div className='flex flex-col'>
            <label
                htmlFor={label}
                className='text-gray-700 text-left'
                {...otherProps}>{label} <span className='text-red-500'>{required ? "*" : ""}</span>
            </label>

            {type === "textarea" ? <textarea {...inputProps} /> : <input  {...inputProps} />}
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    )
}

export default InputElement
