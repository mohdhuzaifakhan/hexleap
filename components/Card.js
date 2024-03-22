import React from 'react'
import Image from "next/image";
import CardHeader from './CardHeader';
import CardHeader2 from './CardHeader2';
const Card = ({ img_link, cardheader }) => {
    return (
        <div className="block min-h-[450px] w-full bg-white mx-1 rounded font-sans shadow-md rounded-md my-1 font-sans p-2">
            <div className="flex h-[320px] w-full">
                <Image
                    src={img_link}
                    width={250}
                    height={700}
                    className='w-full rounded-md'
                    alt="Picture of the author"
                />
            </div>
            {cardheader}
        </div>
    )
}

export default Card
