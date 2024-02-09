"use client";
import Select from 'react-select'


const FormSelect = ({ options, name, label, handleChange, error, ...otherProps }) => {

    return (
        <div className='flex flex-col '>
            {label && <label htmlFor={name} className='text-gray-700 '> {label}</label>}
            <Select
                options={options}
                name={name}
                onChange={e => handleChange(e)}
                className='text-gray-500 text-sm'
                {...otherProps}
            />
            {error &&
                <span className='text-red-500 text-sm'>{error}</span>

            }
        </div>
    )
}

export default FormSelect;
