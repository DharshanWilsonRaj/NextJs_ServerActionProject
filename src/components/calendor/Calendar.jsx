"use client";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import React, { useState } from 'react'

const Calendar = () => {
    const [initialView, setInitialView] = useState('dayGridMonth');

    return (
        <div className=''>
            {/* <FullCalendar
                plugins={[dayGridPlugin]}
                initialView={initialView}
            /> */}
        </div>

    )
}

export default Calendar
