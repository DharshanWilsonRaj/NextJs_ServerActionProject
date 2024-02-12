import { redirect } from "next/navigation";
import Links from "./links"
import { logout } from "@/app/(auth)/action";

const EmployeeHeader = ({ userName }) => {

    const handleLogout = async () => {
        'use server'
        const response = await logout();
        if (response?.success) {
            redirect('/login')
        }
    }

    return (
        <div className='bg-gray-800 h-14 '>
            <div className="flex items-center h-full px-8 text-white">
                <span className="font-bold text-xl">Welcome <span className="capitalize mx-3 text-2xl">{userName}</span></span>
                <div className=" flex ms-auto gap-4 items-center">
                    <Links />
                    <form action={handleLogout}>
                        <button className='text-white bg-red-500 px-5 py-2 rounded hover:bg-red-600 '>Logout</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeHeader
