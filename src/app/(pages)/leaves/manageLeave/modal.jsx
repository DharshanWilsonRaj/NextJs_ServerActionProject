'use client'
import { getDepartMent } from '@/app/utils'
import FormSelect from '@/components/formSelect/FormSelect'
import InputElement from '@/components/inputElement/InputElement'
import moment from 'moment'
import React from 'react'

const LeaveManageModal = ({ isHr = false, formik }) => {
    const typeOPtions = [
        {
            label: "Annual",
            value: 1
        },
        {
            label: "causal",
            value: 2
        },
        {
            label: "seek",
            value: 3
        }
    ]
    return (
        <div>
            <dialog id="my_modal_3" className="  min-h-[400px] w-[750px] modal-top rounded bg-slate-50 ">
                <div className="modal-box modal-top px-5 py-4">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
                    </form>
                    <h3 className="font-semibold text-lg my-4">Leave Application</h3>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Employee name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Department
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    From
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    To
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white  border-t border-b" >
                                <td className="px-6 py-4">
                                    {formik?.values?.name}
                                </td>
                                <td className="px-6 py-4">
                                    {getDepartMent(formik?.values?.department)}
                                </td>
                                <td className="px-6 py-4">
                                    {moment(formik.values.fromDate).format('DD-MM-YYYY')}

                                </td>
                                <td className="px-6 py-4">
                                    {moment(formik.values.toDate).format('DD-MM-YYYY')}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="my-4 grid grid-cols-2 gap-2">
                        <InputElement
                            label="Subject"
                            type="textarea"
                            placeholder="Enter reson for leave"
                            rows={1}
                            name="subject"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            readOnly={isHr ? false : true}
                        />
                        <FormSelect
                            label="Type"
                            type="text"
                            name="type"
                            options={typeOPtions}
                            value={typeOPtions.find(curr => curr.value === parseInt(formik.values.type))}
                            handleChange={(e) => formik.setFieldValue('type', e.value)}
                        // readOnly
                        />

                    </div>
                    {
                        !isHr &&
                        <>
                            <h6 className='text-gray-700'>Status</h6>
                            <div className="my-1 grid grid-cols-6 gap-2">
                                <div className="flex gap-2 ">

                                    <input type="radio" name='status' id='approve' />
                                    <label htmlFor="approve" className='text-gray-700'>Approve</label>
                                </div>
                                <div className="flex gap-2 ">

                                    <input type="radio" name='status' id='pending' />
                                    <label htmlFor="pending" className='text-gray-700'>Pending</label>
                                </div>
                                <div className="flex gap-2 ">

                                    <input type="radio" name='status' id='reject' />
                                    <label htmlFor="reject" className='text-gray-700'>Reject</label>
                                </div>
                            </div>
                        </>
                    }
                    <div className="flex gap-3 mt-20">
                        <div className="ms-auto">
                            <form method="dialog">
                                <button className='ms-auto bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400' >
                                    close
                                </button>
                            </form>
                        </div>
                        <button className=' bg-blue-500 px-3 py-2 text-white rounded hover:bg-blue-400' type='submit'>
                            submit
                        </button>
                    </div>


                </div>
            </dialog>
        </div >
    )
}

export default LeaveManageModal
