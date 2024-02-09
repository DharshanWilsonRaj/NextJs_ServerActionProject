import Link from 'next/link'
import React from 'react'
import Button from './Button';
import { handleDeleteEmployee } from './action';
import { getDepartMent } from '@/app/utils';

const EmployeesPage = async () => {

    const response = await fetch('http://localhost:8000/api/employee/index');
    const json = await response?.json();
    const data = json?.data || [];
    
    return (
        <div className='p-2'>
            <div className="flex my-2 items-center">
                <h6 className='font-semibold text-xl'>Employees</h6>
                <Link href={'/employees/add'} className='ms-auto border px-3 py-2 rounded  hover:bg-gray-100'>Add new</Link>
            </div>
            <div className="relative overflow-x-auto rounded ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.no
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employee name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Mail ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Department
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Joined Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !!data?.length && data?.map((curr, idx) =>
                                <tr className="bg-white  border-t border-b" key={idx}>
                                    <td className="px-6 py-4">
                                        {idx + 1}
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {curr.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {curr.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {curr.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {getDepartMent(curr.department)}
                                    </td>

                                    <td className="px-6 py-4">
                                        {curr.doj}
                                    </td>
                                    <td className="px-6 py-4 text-center flex items-center justify-center">
                                        <Link href={`/employees/${curr.id}`} className='border px-4 py-2 rounded  hover:bg-gray-100'>Edit</Link>
                                        <Button
                                            id={curr.id}
                                            className='border px-3 rounded py-2 ms-2  hover:bg-gray-100'
                                            handleDelete={handleDeleteEmployee}
                                        />
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default EmployeesPage
