import React from 'react'
import EmployeeHeader from './header/Header'

const EmployeeLayout = ({ children, userName  }) => {
    return (
        <div className="">
            <EmployeeHeader userName={userName} />
            <div className="bg-slate-50 w-full max-w-screen-3xl  h-screen px-8 py-3">
                {children}
            </div>
        </div>

    )
}

export default EmployeeLayout
