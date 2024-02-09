import React from 'react'

const Widgets = (props) => {
    const { title, icon, value, color } = props.data

    return (
        <div className='bg-slate-50 p-2 rounded flex justify-between items-center px-3 min-h-24 shadow'>
            <div className="flex flex-col">
                <span className='font-bold'>
                    {title}
                </span>
                <span className={`font-bold text-2xl ${color}`}>
                    {value}
                </span>
            </div>
            <div>
                <span className={`text-3xl ${color}`}>{icon}</span>
            </div>
        </div>
    )
}

export default Widgets
