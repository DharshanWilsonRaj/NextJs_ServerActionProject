"use client"
import React, { useEffect, useState } from 'react'
import EditLeave from './EditLeave'

const EditLeaveButton = ({ id }) => {
    const [editId, setEditID] = useState(null);


    return (
        <>
            <button
                className='border px-4 py-2 rounded  hover:bg-gray-100'
                onClick={() => setEditID(id)}>
                Edit
            </button>
            {
                editId && <EditLeave id={editId} setEditID={setEditID} />
            }
        </>
    )
}

export default EditLeaveButton
