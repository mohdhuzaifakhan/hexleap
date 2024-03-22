import React from 'react'

const CardHeader2 = ({ title, month, day, time, content }) => {
    return (
        <div className='block p-2'>

            <div className='flex font-sans justify-center font-semibold w-full py-1 my-1'>
                <h2 className='text-center'>{title}</h2>
            </div>
            <div className='flex p-1 text-sm  justify-center font-bold-200 font-sans'>
                <span className='border-r px-1'>{month}</span>
                <span className='border-r px-1'>{day}</span>
                <span className='mx-1'>{time}</span>
            </div>
            <div className='flex jusity-center font-sans'>
                <p className='text-center font-bold-400 text-slate-300'>
                    {content}
                </p>
            </div>
            <div className='flex w-full rounded-sm my-1 text-white'>
                <button className='bg-black p-1 rounded-sm w-full'>
                    Take Flight Collection

                </button>

            </div>

        </div>
    )
}

export default CardHeader2
