'use client'
import { useEffect } from "react";
import { isLoggedIn } from "./(auth)/action";
import { useRouter } from 'next/navigation'

let isUserLogged = null;

const CheckLogoinComponent = () => {
    const router = useRouter()
    function checkLogoin() {
        isUserLogged = isLoggedIn();
        if (!isUserLogged) {
            router.push('/login')
        }
        else if (isUserLogged && isUserLogged !== "admin") {
            router.push('/employeeProfile')
        }
      
    }
    useEffect(() => {
        checkLogoin();
    }, [])

    return (
        <>

        </>
    )
}

export default CheckLogoinComponent
