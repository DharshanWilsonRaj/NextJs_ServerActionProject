
import EmployeeHeader from '@/components/employeeLayout/header/Header'
import { cookies } from 'next/headers'
import React from 'react'

const UserLayout = ({ children }) => {
    const userName = cookies().get('user')?.value || ''
    return (
        <>
            <div className="">
                <EmployeeHeader userName={userName} />
                <div className="bg-slate-50 w-full max-w-screen-3xl  h-screen px-8 py-3">
                    {children}
                </div>
            </div>

        </>
    )
}

export default UserLayout
