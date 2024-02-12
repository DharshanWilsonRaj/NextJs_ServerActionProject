'use client'

import InputElement from '@/components/inputElement/InputElement'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import { useFormik } from 'formik'
import { employeeSchema } from '../schema'
import FormSelect from '@/components/formSelect/FormSelect'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { handleEmployeeadd } from '../action'

const options = [
    { value: 1, label: 'Web development' },
    { value: 2, label: 'Mobile development' },
    { value: 3, label: 'Design' },
    { value: 4, label: 'Tester' },
    { value: 5, label: 'Degital Marketing' },
];

const initialValues = {
    emp_id: '',
    name: "",
    email: '',
    password: '',
    phone: '',
    department: '',
    doj: ''
}

const AddForm = () => {
    const router = useRouter();
    // const handleSubmit = async (form) => {
    //     'use server';
    //     fetch('http://localhost:8000/api/employee/store', {
    //         method: "POST",
    //         body: form,
    //     })
    // }

    const handleSubmit = useCallback((values) => {
        try {
            const response = handleEmployeeadd(values);
            if (response.success) {
                toast('success fully Created!', {
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
                router.push('/employees')
            }
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    const formik = useFormik({
        initialValues,
        validationSchema: employeeSchema,
        onSubmit: handleSubmit

    });

    const formikRef = useRef();
    formikRef.current = formik

    return (
        <div className='flex items-center justify-center '>
            <form className='w-[550px] h-full my-10 rounded  bg-white px-5 py-2' onSubmit={formik.handleSubmit}>
                <div className="flex items-center gap-2">
                    <Link href='/employees' className='bg-black rounded px-3 py-1 text-white text-sm'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                    <h6 className=' text-xl font-semibold mx-auto'>Add Employee</h6>
                </div>

                <div className="grid gap-5 my-4">
                    <InputElement
                        type="text"
                        label="Employee ID"
                        name="emp_id"
                        value={formik.values.emp_id}
                        placeholder={'Enter ID'}
                        required
                        onChange={formik.handleChange}
                        error={formik.errors.emp_id && formik.touched.emp_id ? formik.errors.emp_id : null}
                    />

                    <InputElement
                        type="text"
                        label="Employee Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder={'Enter name'}
                        required
                        error={formik.errors.name && formik.touched.name ? formik.errors.name : null}
                    />

                    <InputElement
                        type="email"
                        label=" Email ID"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder={'Enter email'}
                        required
                        error={formik.errors.email && formik.touched.email ? formik.errors.email : null}
                    />

                    <InputElement
                        type="password"
                        label="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder={'Enter password'}
                        required
                        error={formik.errors.password && formik.touched.password ? formik.errors.password : null}
                    />
                    <InputElement
                        label="Phone"
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        placeholder={'Enter phone number'}
                        required
                        error={formik.errors.phone && formik.touched.phone ? formik.errors.phone : null}
                    />

                    <div className="">
                        <label htmlFor="" className='text-gray-600'>Department</label>
                        <FormSelect
                            name="department"
                            handleChange={(e) => formik.setFieldValue('department', e.value)}
                            options={options}
                        />
                        {
                            formik.errors.department && <div>
                                <span className='text-red-500 text-sm'>
                                    {formik.errors.department && formik.touched.department ? formik.errors.department : ''}
                                </span>
                            </div>
                        }
                    </div>

                    <InputElement
                        label="Date of joined"
                        type="date"
                        name='doj'
                        value={formik.values.doj}
                        onChange={formik.handleChange}
                        placeholder={'Enter Date'}
                        required
                        error={formik.errors.doj && formik.touched.doj ? formik.errors.doj : null}
                    />
                    <button className='bg-gray-700 text-white py-2 rounded hover:bg-gray-800' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddForm
