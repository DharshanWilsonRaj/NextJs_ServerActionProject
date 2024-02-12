import * as Yup from 'yup';

export const employeeSchema = Yup.object().shape({
    emp_id: Yup.string().required('Employee field is required'),
    name: Yup.string().required('Name field is required'),
    email: Yup.string().email().required('Email field is required'),
    phone: Yup.string().required('Phone field is required'),
    // password: Yup.string().required('Password field is required'),
    department: Yup.string().required('Department field is required'),
    doj: Yup.string().required('Joined Date is required'),
})