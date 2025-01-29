import React from 'react'
import { FaFacebook,FaTwitter , FaInstagram,FaLinkedin } from "react-icons/fa";


const Headertop = () => {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className=' container py-4'>
                <div className=' flex justify-between items-center'>
                    <div className=' hidden lg:flex gap-1'>
                        <div className=' header_top_icon_wrapper'>  <FaFacebook /> </div>
                        <div className=' header_top_icon_wrapper'>  <FaTwitter /> </div>
                        <div className=' header_top_icon_wrapper'>  <FaInstagram /> </div>
                        <div className=' header_top_icon_wrapper'>  <FaLinkedin /> </div>
                    </div>
                    <div className=' flex items-center gap-1'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Headertop;