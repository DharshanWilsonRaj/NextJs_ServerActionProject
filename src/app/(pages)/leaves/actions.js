"use server"
import { revalidatePath } from 'next/cache';
export async function leaveSumbitAplication(values) {
    const response = await fetch('http://localhost:8000/api/admin/leave/store', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),

    })
    const json = await response.json();
    revalidatePath('/leaves');
    if (json.success) {
        return json
    }
}


export async function handleDeleteLeave(id) {
    try {
        fetch(`http://localhost:8000/api/admin/leave/delete/${id}`, {
            method: "POST",
            body: id,
        })
        revalidatePath('/leaves');
    } catch (error) {
        console.log(error);
    }
}


export async function getEditLeaveById(id) {
    try {
        const response = await fetch(`http://localhost:8000/api/admin/leave/edit/${id}`);
        const json = await response.json();
        const data = json?.data
        return data
    } catch (error) {
        console.log(error.message);
    }
}


export async function UpdateLeaveByID(values, id) {
    const response = await fetch(`http://localhost:8000/api/admin/leave/update/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
    })
    const json = await response.json();
    if (json?.success) {
        revalidatePath('/leaves');
        return json
    }
}