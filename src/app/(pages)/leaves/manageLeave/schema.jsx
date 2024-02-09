import * as Yup from 'yup';

export const manageLeaveSchema = Yup.object().shape({
    name: Yup.string().required('Name field is required'),
    department: Yup.string().required('Department field is required'),
    fromDate: Yup.string().required('From Date field is required'),
    toDate: Yup.string().required('To Date field is required'),
    subject: Yup.string().required('Subject field is required'),
    type: Yup.string().required('Type field is required'),
    status: Yup.string().required('status field is required'),
})