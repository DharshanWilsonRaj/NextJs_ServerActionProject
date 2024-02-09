"use client";

import { useRouter } from 'next/navigation';

const ProtectedLayout = () => {
    const router = useRouter();
    const isLoggedin = false;


    if (isLoggedin) {
        router.push('/')
    } else {
        router.push('/login')
    }

    return (<></>)
}

export default ProtectedLayout;