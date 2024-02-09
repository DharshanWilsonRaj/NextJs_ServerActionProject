import Widgets from '@/components/widgets/Widgets'
import { faBuildingUser, faUser, faUserCheck, faUserMinus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DashboardPage = () => {

    const widgetsContent = [
        {
            title: "No.Employee",
            value: 25,
            color: 'text-blue-500',
            icon: <FontAwesomeIcon icon={faUsers} />

        },
        {
            title: "Departments",
            value: 5,
            color: 'text-teal-500',
            icon: <FontAwesomeIcon icon={faBuildingUser} />

        },
        {
            title: "Total present",
            value: 23,
            color: 'text-yellow-500	',
            icon: <FontAwesomeIcon icon={faUserCheck} />

        },
        {
            title: "Absents",
            value: 2,
            color: 'text-pink-600',
            icon: <FontAwesomeIcon icon={faUserMinus} />

        },

    ]

    const commingEvents = [
        {
            title: 'Round table discussions',
            desc: "A round table meeting is a discussion-based business meeting led by a single moderator. ",
            time: '07-02-2024'
        },
        {
            title: ' Private parties',
            desc: "Businesses plan and host private parties to celebrate events may take place ",
            time: '10-02-2024'
        },
        {
            title: ' Team-building events',
            desc: "Team-building events may take place on their own or as part of larger,",
            time: '12-02-2024'
        },
        {
            title: 'Shareholder meetings',
            desc: "Annual shareholder meetings are regulatory requirements for private and public companies",
            time: '13-02-2024'
        },
        {
            title: 'Private parties meetings',
            desc: "Annual shareholder meetings are regulatory requirements for private and public companies",
            time: '17-02-2024'
        },
    ]

    const noticeBoards = [
        {
            title: 'positive improvements for the community',
            desc: "Making a positive impact within your local community can benefit your company in a variety of ways.",
        },
        {
            title: ' State goals explicitly',
            desc: "Creating procedures for clearly defining goals and expectations for staff members can help to",
        },
        {
            title: 'Update training documents',
            desc: "This can speed up the development of the newer employee, as they can benefit from lesson",
        },
        {
            title: ' performance assessments',
            desc: "instituting new performance assessments at your company can allow you to better .",
        },
        {
            title: 'positive improvements for the community',
            desc: "Making a positive impact within your local community can benefit your company in a variety of ways.",
        },
        {
            title: ' State goals explicitly',
            desc: "Creating procedures for clearly defining goals and expectations for staff members can help to improve their productivity.",
        },
        {
            title: 'Update training documents',
            desc: "This can speed up the development of the newer employee, as they can benefit from lessons that the more experienced team member",
        },
    ]

    const feedBacks = [
        {
            name: "wilson",
            color: "text-orange-500",
            profile: "W",
            content: "Making a positive impact within your local can allow you to better guide ",
            time: "05-20-23 12.04 pm"
        },
        {
            name: "Dharshan",
            color: "text-lime-500",
            profile: "D",
            content: "assessments at your company can allow you to better guide ",
            time: "02-20-23 02.01 pm"
        },

        {
            name: "Radha",
            color: "text-purple-400",
            profile: "R",
            content: "development at your development can allow you to development guide ",
            time: "01-20-23 10.04 am"
        },
        {
            name: "Swetha",
            color: "text-cyan-500",
            profile: "S",
            content: "rofessiona at your rofessiona can allow you to better guide ",
            time: "01-20-23 01.27 pm"
        },
        {
            name: "Kumar",
            color: "text-orange-500",
            profile: "K",
            content: "mpact within your local can allow you to better guide rofessiona at your rofessiona can allow you to better guide ",
            time: "01-20-23 01.27 pm"
        },
    ]

    return (
        <div>
            <div className="grid  ">
                <div className="grid grid-cols-4 gap-3 px-4 py-3">
                    {widgetsContent?.map((curr, idx) =>
                        <Widgets data={curr} key={idx} />
                    )}
                </div>
                <div className='grid grid-cols-3 gap-3 px-4'>
                    <div className=" rounded shadow  max-h-[600px] bg-slate-50 p-2">
                        <h6 className='font-semibold text-xl my-2'> Comming Events 🎉</h6>

                        <div className="max-h-[90%] overflow-y-auto ">
                            <ul>
                                {
                                    commingEvents?.map((curr, idx) =>
                                        <li className='flex gap-2 border-t border-slate-200 p-2 my-3 w-full text-sm' key={idx}>
                                            <span className='font-bold'> {idx + 1}.</span>
                                            <span>
                                                <span className='flex justify-between w-full'>
                                                    <h6 className='font-semibold '>{curr.title}</h6>
                                                    <span className='text-xs text-gray-600'>&#40;{curr.time}&#41;	</span>
                                                </span>
                                                <p className='text-sm  text-gray-500'>
                                                    {curr.desc}
                                                </p>
                                            </span>

                                        </li>)
                                }
                            </ul>
                        </div>

                    </div>
                    <div className=" rounded shadow h-[600px]  bg-slate-50 p-2">
                        <h6 className='font-semibold text-xl my-2'> Notice Board </h6>

                        <div className="max-h-[90%] overflow-y-auto">
                            <ul>
                                {
                                    noticeBoards?.map((curr, idx) =>
                                        <li className='flex gap-2 border-t border-slate-200 p-2 my-3 w-full text-sm' key={idx}>
                                            <span className='font-bold text-3xl'>📣	</span>
                                            <span>
                                                <span className='flex justify-between w-full'>
                                                    <h6 className='font-semibold '>{curr.title} </h6>

                                                </span>
                                                <p className='text-sm  text-gray-500'>
                                                    {curr.desc}
                                                </p>
                                            </span>
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className=" rounded shadow h-[600px] overflow-y-auto bg-slate-50 p-2">
                        <h6 className='font-semibold text-xl my-2'> FeedBacks</h6>
                        <div className="max-h-[90%] overflow-y-auto">
                            <ul className=''>
                                {feedBacks?.map((curr, idx) => <li className='flex gap-2 p-2 items-start border-t my-2 text-sm' key={idx}>
                                    <span className={`${curr.color} border bg-slate-50 py-2 px-3 rounded-full font-semibold text-sm`}>{curr.profile}</span>
                                    <span className='flex flex-col w-full'>
                                        <span className='font-semibold'>{curr.name}</span>
                                        <span className='text-gray-500 text-sm'>{curr.content}</span>
                                        <span className='ms-auto text-gray-400 text-xs'>
                                            {curr.time}
                                        </span>
                                    </span>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className='grid grid-cols-2 gap-3 px-4 my-3'>
                    <div className=" rounded shadow  h-[150px] overflow-y-auto bg-slate-50 p-2 text-sm">
                        <h6 className='text-xl font-semibold'>Heading</h6>
                        <p className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis sapiente ea inventore nisi debitis cupiditate fugit. Excepturi magni facere odit, esse, quod itaque dolorum, nobis amet commodi ipsum enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accus
                        </p>
                    </div>
                    <div className=" rounded shadow h-[150px] overflow-y-auto  bg-slate-50 p-2 text-sm">
                        <h6 className='text-xl font-semibold'>Heading</h6>
                        <p className='text-gray-500'>
                            Lorem ipsum dolor sit amet concommodi ipsum enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis sapiente ea inventore nisi debitis cupiditate fugit. Excepturi magni facere odit, esse, quod itaque dolorum, nobis amet commodi ipsum enim.
                        </p>

                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default DashboardPage
