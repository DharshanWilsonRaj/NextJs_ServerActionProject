import React from 'react'

const AttendancePage = () => {
  const departMentList = [
    {
      id: 1,
      name: 'karan',
      deptName: "Web Developement",
      isPresent: 1
    },
    {
      id: 2,
      name: 'kaviya',
      deptName: "Mobile Developement",
      isPresent: 2
    },
    {
      id: 3,
      name: 'Madhan',
      deptName: "Design",
      isPresent: 1
    },
    {
      id: 4,
      name: 'Suresh',
      deptName: "Degital Marketing",
      isPresent: 2
    },
    {
      id: 5,
      name: 'lalith',
      deptName: "Testing",
      isPresent: 1
    },
  ]
  return (
    <div className='p-2'>
      <div className="flex my-2 items-center">
        <h6 className='font-semibold text-xl'>Attendance</h6>
        <button className='ms-auto border px-3 py-2 rounded  hover:bg-gray-100'>Add new</button>
      </div>
      <div className="relative overflow-x-auto rounded ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.no
              </th>
              <th scope="col" className="px-6 py-3">
                Employee name
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Present
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              departMentList?.map((curr, idx) =>
                <tr className="bg-white  border-t border-b" key={idx}>
                  <td className="px-6 py-4">
                    {curr.id}
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {curr.name}
                  </th>
                  <td className="px-6 py-4">
                    {curr.deptName}
                  </td>
                  <td className={`px-6 py-3 ${curr.isPresent===1 ? "text-green-500" : "text-red-500"}`}>
                    {curr.isPresent === 1 ? "Present" : "Absent"}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className='border px-4 py-2 rounded  hover:bg-gray-100'>Edit</button>
                    <button className='border px-3 rounded py-2 ms-2  hover:bg-gray-100'>Delete</button>
                  </td>
                </tr>)
            }

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AttendancePage
