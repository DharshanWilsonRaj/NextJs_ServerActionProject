
import InputElement from '@/components/inputElement/InputElement'
import React from 'react'
import { login } from '../action'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'


const page = async () => {
    const handleSubmit = async (values, res) => {
        'use server'
        const response = await login(values, res);

        if (response?.success) {
            const cookieStore = cookies();
            const user = cookieStore.get('user');
            if (user?.value === "admin") {
                redirect('/')
            }
            if (user?.value && user?.value !== "admin") {
                redirect('/employeeProfile')
            }
            else{
                redirect('/')
            }
        }
    }
    return (
        <div className="h-screen bg-[url('https://i0.wp.com/blue.com.iq/wp-content/uploads/2021/10/Profile-01.jpg?resize=1920%2C1080&ssl=1')]">
            <div className='flex '>
                <form className="max-w-sm mx-auto mt-40 bg-gradient-to-r  from-gray-50 to-gray-50 h-[300px] w-[380px] p-3 rounded" action={handleSubmit}>
                    <h6 className='text-xl font-semibold text-center mt-4'>Login </h6>
                    <div className="mb-5">
                        <InputElement
                            label="Email "
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                        />
                    </div>
                    <div className="mb-5">
                        <InputElement
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default page
