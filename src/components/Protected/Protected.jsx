"use client";

import { useRouter } from 'next/navigation';

const ProtectedLayout = () => {
    const router = useRouter();
    const isLoggedin = false;
    return (
        <>
            {isLoggedin ? router.push('/') : router.push('/login')}
        </>
    )
}

export default ProtectedLayout;