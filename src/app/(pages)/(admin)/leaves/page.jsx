
import React from 'react'
import ManageLeave from './manageLeave/ManageLeave'

import EditLeaveButton from './Edit/EditLeaveButton';

import { handleDeleteLeave } from './actions';
import Button from '../employees/Button';
import { getDepartMent } from '@/app/(auth)/action';

const LeavesPage = async () => {
    const response = await fetch("http://localhost:8000/api/admin/leave/index");
    const json = await response.json();
    const data = json.data || [];

    const getTypes = (value) => {
        switch (parseInt(value)) {
            case 1:
                return "Annual"
            case 2:
                return "Casual"
            case 3:
                return "Seek"
            default:
                break;
        }
    }

    const getDays = (from, to) => {
        const fromDate = new Date(from);
        const toDate = new Date(to);
        const differenceInMilliseconds = toDate - fromDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    };


    return (
        <div className='p-2  '>
            <div className="bg-white h-screen p-3">
                <h6 className='font-semibold text-xl my-2'>Manage Leaves</h6>
                <ManageLeave />
                <div className="flex my-1 items-center">

                    <h6 className='font-semibold text-xl'>Leaves</h6>
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
                                    Department
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Subject
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Days
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    From
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    To
                                </th>
                                <th scope="col" className="px-6 py-3 ">
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
                                            {getDepartMent(curr.department)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {curr.subject}
                                        </td>
                                        <td className={`px-6 py-4`}>
                                            <span className={`rounded-xl px-3 text-black text-xs py-2 ${parseInt(curr.status) === 1 ? "bg-green-200" : parseInt(curr.status) === 2 ? "bg-orange-300" : "bg-red-300"}`}>
                                                {parseInt(curr.status) === 1 ? " Approved" : parseInt(curr.status) === 2 ? "Pending" : "Rejected"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {getTypes(curr.type)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {getDays(curr.fromDate, curr.toDate)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {curr.fromDate}
                                        </td>
                                        <td className="px-6 py-4">
                                            {curr.toDate}
                                        </td>
                                        <td className="px-6 py-4  flex">
                                            <EditLeaveButton id={curr.id} />
                                            <Button
                                                id={curr.id}
                                                className='border px-3 rounded py-2 ms-2  hover:bg-gray-100'
                                                handleDelete={handleDeleteLeave}
                                            />
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default LeavesPage
