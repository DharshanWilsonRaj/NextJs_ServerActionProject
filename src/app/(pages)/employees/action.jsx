'use server'
import { revalidatePath } from "next/cache";

export async function handleEmployeeadd(values) {
    try {
        const response = await fetch('http://localhost:8000/api/employee/store', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        })
        const json = await response.json();
        revalidatePath('/employees')
        if (json.success) {
            return json
        }
    } catch (error) {
        console.log(error);
    }
}

export async function handleDeleteEmployee(id) {
    try {
        fetch(`http://localhost:8000/api/employee/delete/${id}`, {
            method: "POST",
            body: id,
        })
        revalidatePath('/employees')
    } catch (error) {
        console.log(error);
    }
}

export async function getEmployeeById(id) {
    const response = await fetch(`http://localhost:8000/api/employee/edit/${id}`);
    const json = await response.json();
    const data = json?.data;
    return data
}

export async function handleEmployeeUpdate(values, id) {
    try {
        const response = await fetch(`http://localhost:8000/api/employee/update/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        })
        const json = await response.json();
        if (json.success) {
            revalidatePath('/employees')
            return json
        }
    } catch (error) {
        console.log(error);
    }
}