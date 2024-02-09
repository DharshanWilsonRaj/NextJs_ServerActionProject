import * as Yup from 'yup'

export const EditLeaveSchema = Yup.object().shape({
    name: Yup.string().required('Name field is requried'),
    department: Yup.string().required('Department field is requried'),
    fromDate: Yup.string().required('From Date field is requried'),
    toDate: Yup.string().required('To date field is requried'),
    status: Yup.string().required('To date field is requried'),
})