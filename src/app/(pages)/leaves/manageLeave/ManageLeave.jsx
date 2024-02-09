'use client'
import FormSelect from '@/components/formSelect/FormSelect'
import InputElement from '@/components/inputElement/InputElement'
import React, { useRef, useState, useEffect } from 'react'
import LeaveManageModal from './modal'
import { useFormik } from 'formik'
import { manageLeaveSchema } from './schema'
import { leaveSumbitAplication } from '../actions'
import { toast } from 'react-toastify'

const initialValues = {
    name: "",
    department: "",
    fromDate: "",
    toDate: "",
    subject: '',
    type: '',
    status: '1',
}

const DepartMentOptions = [
    { value: 1, label: 'Web development' },
    { value: 2, label: 'Mobile development' },
    { value: 3, label: 'Design' },
    { value: 4, label: 'Tester' },
    { value: 5, label: 'Degital Marketing' },
];


const ManageLeave = () => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const handleSubmit = async (values) => {
        try {
            const response = await leaveSumbitAplication(values);
            const json = response
            if (json.success) {
                toast('success fully submited!', {
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
                document.getElementById('my_modal_3').close()
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: manageLeaveSchema,
        onSubmit: handleSubmit
    });

    const formikRef = useRef();
    formikRef.current = formik;


    if (!hydrated) {
        return (<div className='p-3 my-1 h-[130px] flex items-center justify-center'>
            <div className="text-sm">
                <div className="text-center">
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>)
    }
    return (
        <div className='p-3 my-1'>
            <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-4 gap-4 items-center">
                    <InputElement
                        label="Employee Name"
                        placeholder="Enter name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <FormSelect
                        label="Department"
                        name="department"
                        options={DepartMentOptions}
                        value={DepartMentOptions.find(curr => curr.value === parseInt(formik.values.department))}
                        handleChange={(e) => formik.setFieldValue('department', e.value)}
                    />
                    <InputElement
                        label="From"
                        type="date"
                        name="fromDate"
                        value={formik.values.fromDate}
                        onChange={formik.handleChange}

                    />
                    <InputElement
                        label="To"
                        type="date"
                        name="toDate"
                        value={formik.values.toDate}
                        onChange={formik.handleChange}
                    />

                </div>
                <div className="flex mt-4">
                    <div className='flex gap-2 items-center ms-auto'>
                        <button
                            className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 disabled:bg-blue-300'
                            type='button'
                            onClick={() => {
                                document.getElementById('my_modal_3').showModal()
                            }}
                            disabled={!formik?.values?.name || !formik?.values?.department || !formik?.values?.fromDate || !formik?.values?.toDate}
                        >
                            Get
                        </button>
                        <button className='bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600' type='reset' onClick={() => formik.setValues(initialValues)}>Clear</button>
                    </div>
                </div>
                <LeaveManageModal isHr={true} formik={formik} />
            </form>
        </div>
    )
}

export default ManageLeave
