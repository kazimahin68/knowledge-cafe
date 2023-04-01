import React from 'react';

const Time = (props) => {
    const {time} = props;
    let total = 0;
    for (const readingTime of time){
        total = total + readingTime;
    }
    return (
        <div className='h-20 bg-blue-100 rounded-lg border-2 border-solid border-blue-600 flex items-center justify-center'>
             <p className='text-blue-600 font-semibold'>Spent time on read: {total} min</p>
        </div>
    );
};

export default Time;