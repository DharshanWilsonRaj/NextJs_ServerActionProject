"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Links = () => {
    const pathName = usePathname();
    const links = [
        {
            title: "Details",
            path: "/employeeProfile",
            isActive: pathName === '/employeeProfile' && true
        },
        {
            title: "Leave",
            path: "/employeeleave",
            isActive: pathName === '/employeeleave' && true
        }
    ]
    return (
        <div>
            {
                links?.map((curr, idx) =>
                    <Link key={idx}
                        href={curr.path}
                        className={` border-slate-500 border-b hover:text-white hover:border-white mx-3 ${curr.isActive ? "text-white border-white" : 'text-slate-400'}`}>{curr.title}
                    </Link>
                )
            }
        </div>
    )
}

export default Links
