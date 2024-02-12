"use server";
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers'

export async function isLoggedIn() {
    try {
        const cookieStore = cookies();
        const user = cookieStore.get('user');
        return user?.value === "admin" ? "admin" : user?.value || null
    } catch (error) {
        console.log(error);
    }
}

export async function login(values) {
    const response = await fetch(`${process.env.NEXT_BASE_URL}/login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json'
        },
        body: values,
    })
    const json = await response.json();
    if (json.success) {
        cookies().set({
            name: 'user',
            value: json?.user,
        })
        cookies().set({
            name: 'token',
            value: json?.token,
        })
        process.on('exit', function () {
            process.exit(1);
        });
        revalidatePath('/')
        return json
    }
}

export async function logout() {

    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const response = await fetch(`${process.env.NEXT_BASE_URL}/logout`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token?.value}`
        }
    })

    const json = await response.json();
    if (json.success) {
        cookies().delete('user')
        cookies().delete('token')
        revalidatePath('/login')
        process.on('exit', function () {
            process.exit(1);
        });
        return json
    }
}

export const getDepartMent = (value) => {
    switch (parseInt(value)) {
        case 1:
            return "Web Developement"
        case 2:
            return "Mobile Developement"
        case 3:
            return "Design"
        case 4:
            return "Testing"
        case 5:
            return "Degital Marketing"
        default:
            break;
    }
}

