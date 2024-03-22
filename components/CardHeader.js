import React from 'react'

const CardHeader = ({ title, events, sportType }) => {
    return (
        <div className="block w-full">
            <h4 className="font-sans text-lg font-semibold-900 my-1">{title}</h4>
            <div className='flex rounded-sm font-sans p-1 bg-neutral-100 my-2 w-full'>
                <div className='w-1/2'>
                    <p className='text-sm'>Total events</p>
                    <h2 className='text-lg font-bold-900'>{events} events</h2>
                </div>
                <div className='w-1/2'>
                    <p className='text-sm'>Sports</p>
                    <h2 className='text-lg font-semibold-900 truncate'>{sportType}</h2>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
