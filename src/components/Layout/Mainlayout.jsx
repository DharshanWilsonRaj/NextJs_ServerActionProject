

import { cookies } from 'next/headers';
import AdminLayout from './Admin/AdminLayout';
import UserLayout from './user/UserLayout';

function MainLayout({ child }) {
    const user = cookies().get('user')?.value || ''
    const token = cookies().get('token')?.value || ''
    return (
        token && user === "admin" ? (
            <AdminLayout children={child} />
        ) : token && user !== "admin" ? (
            <UserLayout children={child} />
        ) : (<>
            {child}
        </>)
    );
}

export async function getServerSideProps({ child }) {
    return {
        props: {
            child,
        },
    };
}

export default MainLayout;