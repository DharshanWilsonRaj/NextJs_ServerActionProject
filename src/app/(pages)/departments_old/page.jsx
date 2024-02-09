import Link from 'next/link'
import React from 'react'

const DepartmentsPage = () => {
    const departMentList = [
        {
            id: 1,
            deptName: "Web Developement",
            totalMem: 5
        },
        {
            id: 2,
            deptName: "Mobile Developement",
            totalMem: 4
        },
        {
            id: 3,
            deptName: "Design",
            totalMem: 3
        },
        {
            id: 4,
            deptName: "Degital Marketing",
            totalMem: 2
        },
        {
            id: 5,
            deptName: "Testing",
            totalMem: 3
        },


    ]
    return (
        <div className='p-2'>
            <div className="flex my-2 items-center">
                <h6 className='font-semibold text-xl'>Departments</h6>
                <Link href='/departments/add' className='ms-auto border px-3 py-2 rounded  hover:bg-gray-100'>Add new</Link >
            </div>
            <div className="relative overflow-x-auto rounded ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.no
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Department name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total member
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departMentList?.map((curr, idx) =>
                                <tr className="bg-white  border-t border-b" key={idx}>
                                    <td className="px-6 py-4">
                                        {curr.id}
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {curr.deptName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {curr.totalMem}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className='border px-4 py-2 rounded  hover:bg-gray-100'>Edit</button>
                                        <button className='border px-3 rounded py-2 ms-2  hover:bg-gray-100'>Delete</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DepartmentsPage
