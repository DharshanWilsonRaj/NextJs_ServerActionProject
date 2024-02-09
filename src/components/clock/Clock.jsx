"use client";
import React, { useState, useEffect } from 'react'
import moment from 'moment';

const Clock = () => {
    // const [hydrated, setHydrated] = useState(false);

    const [clockTime, setClockTime] = useState(moment().format('MMM Do YYYY, h:mm a'));

    // useEffect(() => {
    // //     setHydrated(true);
    // // }, []);

    useEffect(() => {
        setClockTime(moment().format('MMM Do YYYY, h:mm a'));

        const intervalId = setInterval(() => {
            setClockTime(moment().format('MMM Do YYYY, h:mm a'));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // if (!hydrated) {
    //     return null;
    // }

    return (
        <div>
            <p className='text-white'>{clockTime}</p>
        </div>
    )
}

export default Clock
