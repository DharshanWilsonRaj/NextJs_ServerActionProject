
"use client"
import FormSelect from '@/components/formSelect/FormSelect';
import InputElement from '@/components/inputElement/InputElement'
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { UpdateLeaveByID, getEditLeaveById } from '../actions';
import { EditLeaveSchema } from './schema';
import { toast } from 'react-toastify';


const DepartMentOptions = [
    { value: 1, label: 'Web development' },
    { value: 2, label: 'Mobile development' },
    { value: 3, label: 'Design' },
    { value: 4, label: 'Tester' },
    { value: 5, label: 'Degital Marketing' },
];

const initalValues = {
    name: "",
    department: "",
    fromDate: "",
    toDate: "",
    status: '',
};

const EditLeave = ({ id, setEditID = () => { } }) => {

    const handleSubmit = async (values) => {
        const response = await UpdateLeaveByID(values, id);
        if (response?.success) {
            setEditID(null);
            toast('success fully Updated!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
            });
        }
    }

    const formik = useFormik({
        initalValues,
        validationSchema: EditLeaveSchema,
        onSubmit: handleSubmit
    });


    const getEdit = async (id) => {
        const response = await getEditLeaveById(id);
        if (response) {
            formik.setValues({
                name: response?.name,
                department: response?.department,
                fromDate: response?.fromDate,
                toDate: response?.toDate,
                status: response?.status,
            })
        }
    };


    useEffect(() => {
        if (id) {
            document.getElementById('editLeaveModal').showModal()
            getEdit(id)
        }
    }, []);

    if (!id) {
        return null
    }

    return (
        <div className='flex items-start'>

            <dialog id="editLeaveModal" className=" flex min-h-[330px] w-[750px] modal-top rounded bg-slate-50 ">
                <div className="modal-box modal-top px-5 py-4  w-full">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl  px-3 rounded-full border text-gray-500 "
                            onClick={() => setEditID(null)}> x
                        </button>
                    </form>
                    <form className='mt-10  w-full' onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-2 w-full items-start gap-4">
                            <InputElement
                                label="Name"
                                name="name"
                                value={formik?.values?.name}
                                placeholder="Enter Name"
                                onChange={formik.handleChange}
                                error={formik.errors.name || formik.touched.name ? formik.errors.name : null}
                            />

                            <FormSelect
                                options={DepartMentOptions}
                                label="Department"
                                name="department"
                                value={DepartMentOptions?.find(curr => curr.value === parseInt(formik?.values?.department))}
                                handleChange={(e) => formik.setFieldValue('department', e.value)}
                                placeholder="Enter Name"
                                error={formik.errors.name || formik.touched.name ? formik.errors.name : null}
                            />

                            <InputElement
                                label="From"
                                name="fromDate"
                                type="date"
                                value={formik?.values?.fromDate}
                                onChange={formik.handleChange}
                            />

                            <InputElement
                                label="To"
                                name="toDate"
                                type="date"
                                value={formik?.values?.toDate}
                                onChange={formik.handleChange}
                            />

                        </div>
                        <h6 className='text-gray-600 mt-3 mb-1'>Status</h6>
                        <div className="flex gap-4">
                            <div className='flex item-center gap-1'>
                                <input
                                    type="radio"
                                    name='status'
                                    id='approved'
                                    value={1}
                                    checked={parseInt(formik?.values?.status) === 1}
                                    onChange={() => formik.setFieldValue('status', 1)} />
                                <label className="cursor-pointer" htmlFor="approved" >Approved</label>
                            </div>

                            <div className='flex item-center gap-1'>
                                <input
                                    type="radio"
                                    name='status'
                                    id='pending'
                                    value={2}
                                    checked={parseInt(formik?.values?.status) === 2}
                                    onChange={() => formik.setFieldValue('status', 2)} />
                                <label className=" cursor-pointer" htmlFor="pending">Pending</label>
                            </div>

                            <div className='flex item-center gap-1'>
                                <input
                                    type="radio"
                                    name='status'
                                    id='rejected'
                                    value={3}
                                    checked={parseInt(formik?.values?.status) === 3}
                                    onChange={() => formik.setFieldValue('status', 3)} />
                                <label className=" cursor-pointer" htmlFor="rejected">Rejected</label>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-10'>
                            <button
                                className=' ms-auto bg-gray-500 hover:bg-gray-600 text-white rounded p-2'
                                type="button"
                                onClick={() => setEditID(null)}>Close
                            </button>
                            <button
                                className='bg-blue-500 hover:bg-blue-600 text-white rounded p-2'>Update
                            </button>
                        </div>
                    </form>


                </div>


            </dialog>


        </div >
    )
}

export default EditLeave
