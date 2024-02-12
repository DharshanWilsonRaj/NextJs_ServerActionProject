import { getDepartMent, getUser } from "@/app/utils";

const EmployeeProfilePage = async () => {
    const data = await getUser()

    return (
        <div>
            <div className="bg-white rounded w-[500px] h-80 mx-auto my-7 flex flex-col px-4 gap-4 py-5  justify-center">
                <h3 className="text-xl font-bold underline">Basic Details:</h3>
                <span>
                    <span>Emp_id</span><span className="font-bold mx-2">{data?.emp_id}</span>
                </span>
                <span>
                    <span> Name:</span><span className="font-bold mx-2">{data?.name}</span>
                </span>
                <span>
                    <span>Email:</span><span className="font-bold mx-2">{data?.email}</span>
                </span>
                <span>
                    <span>Phone:</span><span className="font-bold mx-2">{data?.phone}</span>
                </span>
                <span>
                    <span>Department:</span><span className="font-bold mx-2">{getDepartMent(data?.department)}</span>
                </span>
                <span>
                    <span>Date of Joined:</span><span className="font-bold mx-2">{data?.doj}</span>
                </span>
            </div>
        </div>
    )
}

export default EmployeeProfilePage
