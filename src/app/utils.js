

import { cookies } from "next/headers"
export async function getUser() {
    try {
        const cookieStore = cookies();
        const { value: token } = cookieStore.get('token');
        const response = await fetch('http://localhost:8000/api/userDetails', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const json = await response?.json();
        const data = json?.data
        return data
    } catch (error) {
        console.log(error);
    }
}
