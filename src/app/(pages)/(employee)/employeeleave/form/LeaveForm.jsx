"use client"
import FormSelect from '@/components/formSelect/FormSelect'
import InputElement from '@/components/inputElement/InputElement'
import { useFormik } from 'formik';

import { EmployeeLeaveSubmit, UpdateLeaveByID } from '@/app/(pages)/(admin)/leaves/actions';
import { EditLeaveFormSchema } from './schema';
import { toast } from 'react-toastify';

const DepartMentOptions = [
    { value: 1, label: 'Web development' },
    { value: 2, label: 'Mobile development' },
    { value: 3, label: 'Design' },
    { value: 4, label: 'Tester' },
    { value: 5, label: 'Degital Marketing' },
];

const typeOPtions = [
    { label: "Annual", value: 1 },
    { label: "causal", value: 2 },
    { label: "seek", value: 3 }
]
const initialValues = {
    name: "",
    department: "",
    fromDate: "",
    toDate: "",
    subject: '',
    type: '',
};

const EmployeeleaveForm = () => {
    const handleSubmit = async (values) => {
        const response = await EmployeeLeaveSubmit(values);
        if (response?.success) {
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
        initialValues: initialValues,
        validationSchema: EditLeaveFormSchema,
        onSubmit: handleSubmit
    });

    return (
        <div>
            <div className="flex items-center justify-center">
                <form className='mt-10 w-[600px] bg-white p-3' onSubmit={formik.handleSubmit} >
                    <div className="grid grid-cols-2 w-full items-start gap-4">
                        <InputElement
                            label="Name"
                            name="name"
                            placeholder="Enter Name"
                            value={formik?.values?.name}
                            onChange={formik.handleChange}
                            error={formik.errors.name && formik.touched.name ? formik.errors.name : null}
                        />
                        <FormSelect
                            options={DepartMentOptions}
                            label="Department"
                            name="department"
                            value={DepartMentOptions?.find(curr => curr.value === parseInt(formik?.values?.department))}
                            handleChange={(e) => formik.setFieldValue('department', e.value)}
                            error={formik.errors.department && formik.touched.department ? formik.errors.department : null}
                        />
                        <InputElement
                            label="From"
                            name="fromDate"
                            type="date"
                            value={formik?.values?.fromDate}
                            onChange={formik.handleChange}
                            error={formik.errors.fromDate && formik.touched.fromDate ? formik.errors.fromDate : null}
                        />
                        <InputElement
                            label="To"
                            name="toDate"
                            type="date"
                            value={formik?.values?.toDate}
                            onChange={formik.handleChange}
                            error={formik.errors.toDate && formik.touched.toDate ? formik.errors.toDate : null}

                        />
                        <InputElement
                            label="Subject"
                            type="textarea"
                            name="subject"
                            value={formik?.values?.subject}
                            placeholder="Reson for leave"
                            onChange={formik.handleChange}
                            rows={1}
                            error={formik.errors.subject && formik.touched.subject ? formik.errors.subject : null}

                        />
                        <FormSelect
                            label="Type"
                            type="text"
                            name="type"
                            options={typeOPtions}
                            value={typeOPtions.find(curr => curr.value === parseInt(formik.values.type))}
                            handleChange={(e) => formik.setFieldValue('type', e.value)}
                            error={formik.errors.type && formik.touched.type ? formik.errors.type : null}
                        // readOnly
                        />
                    </div>


                    <div className='flex gap-2 mt-6'>

                        <button
                            className='ms-auto w-[100px] bg-blue-500 hover:bg-blue-600 text-white rounded p-2'>Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeleaveForm

