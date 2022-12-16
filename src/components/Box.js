import React from 'react'
import icons from "../ultis/icons"
const { FaLaptop } = icons
const Box = () => {
    return (
        <div className='mb-2 border border-opacity-100 w-1/4  '>
            <div className='h-[550px] flex flex-col justify-center items-center p-8 '>
                <span className=' mb-6 '><FaLaptop size={150} color="#0b5c99" /></span>
                <h3 className='text-lg font-bold mb-4 '>MANAGED IT SERVICES</h3>
                <span className='text-sm text-blue font-bold mb-6 '>MAXIMIZE BUSINESS EFFICIENCY</span>
                <div className='text-xs pb-12'>We manage your IT, keep endpoints up-to-date, and deliver uptime giving you peace of mind.</div>
                <button className='bg-main-100 rounded-lg p-4 text-while font-normal'>READ MORE</button>
            </div>
        </div>
    )
}

export default Box