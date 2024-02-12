import React from 'react'
import EditForm from './EditForm'

const EditEmployeePage = ({ params }) => {
    
    return (
        <div>
            <EditForm id={params.id}/>
        </div>
    )
}

export default EditEmployeePage
