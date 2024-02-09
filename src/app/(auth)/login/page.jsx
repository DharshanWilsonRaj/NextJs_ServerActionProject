
import InputElement from '@/components/inputElement/InputElement'
import React from 'react'


const page = async () => {
    
    // const response = await fetch('${process.env.NEXT_BASE_URL}/login', {
    //     method: "POST",
    //     // body
    // })
    
    return (
        <div className="h-screen bg-[url('https://i0.wp.com/blue.com.iq/wp-content/uploads/2021/10/Profile-01.jpg?resize=1920%2C1080&ssl=1')]">
            <div className='flex '>
                <form class="max-w-sm mx-auto mt-40 bg-gradient-to-r  from-gray-50 to-gray-50 h-[300px] w-[380px] p-3 rounded">
                    <h6 className='text-xl font-semibold text-center mt-4'>Login </h6>
                    <div className="mb-5">
                        <InputElement
                            label="Email "
                            placeholder="Enter your email"
                            name="email"
                        />
                    </div>
                    <div className="mb-5">
                        <InputElement
                            label="Password"
                            placeholder="Enter your password"
                            password
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
