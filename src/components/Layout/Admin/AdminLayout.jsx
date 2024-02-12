import Header from '@/components/header/header'
import Sidebar from '@/components/sidebar/sidebar'
import React from 'react'

const AdminLayout = ({ children }) => {
    return (<>
        <Header />
        <div className="flex h-screen ">
            <Sidebar />
            <div className="bg-slate-50 w-full max-w-screen-3xl">
                {children}
            </div>
        </div>
    </>

    )
}

export default AdminLayout
