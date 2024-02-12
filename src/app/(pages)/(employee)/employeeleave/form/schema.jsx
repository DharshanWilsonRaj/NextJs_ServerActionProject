import * as Yup from 'yup'

export const EditLeaveFormSchema = Yup.object().shape({
    name: Yup.string().required('Name field is requried'),
    department: Yup.string().required('Department field is requried'),
    fromDate: Yup.string().required('From Date field is requried'),
    toDate: Yup.string().required('To date field is requried'),
    type: Yup.string().required('Type field is requried'),
    subject: Yup.string().required('Subject field is requried'),
})