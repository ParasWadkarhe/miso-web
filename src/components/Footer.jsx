import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import './Privacy.jsx';

import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
              <div className="bg-[#ac83a9] py-5 px-4 md:px-10">
            <div className="text-white flex flex-col gap-6 md:gap-12">
                {/* Services, Company, Legal sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                    <div className="flex flex-col">
                        <p className="pb-4 text-xl md:text-2xl font-[Montserrat]">SERVICES</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Custom laser etching</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Tailored greeting card design</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Engraved wooden products</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Customized mugs</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="pb-4 text-xl md:text-2xl font-[Montserrat]">COMPANY</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">About Us</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Contact</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Jobs</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Press Kit</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="pb-4 text-xl md:text-2xl font-[Montserrat]">LEGAL</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Terms Of Use</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Privacy Policy</p>
                        <p className="content font-[Raleway] text-lg transition-all cursor-pointer hover:text-xl ease-in-out">Cookie Policy</p>
                    </div>
                </div>

                {/* Copyright and Social Media */}
                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between mt-5">
                    <div className="flex items-center text-center justify-center gap-1">
                        <FaRegCopyright />
                        <p className="text-lg md:text-xl"><strong>MISO</strong></p>
                    </div>

                    <div className='flex gap-4 md:gap-5 mt-3 md:mt-0 text-2xl justify-center'>
                        <a className='transition-all hover:text-3xl ease-in-out text-white' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/miso__by_arin?igsh=b3Zoa3NnZGc4OGZ0'><FaInstagram /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' rel='noopener noreferrer' href='https://www.linkedin.com/company/miso-creations/'><FaLinkedinIn /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' rel='noopener noreferrer' href='https://www.facebook.com/profile.php?id=61563061833928&mibextid=ZbWKwL'><CiFacebook /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' rel='noopener noreferrer' href='tel:+(91) 9119733531'><FaPhone /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' rel='noopener noreferrer' href="mailto:hellomiso21@gmail.com?subject=Hello&body=Hi%20there!"><MdOutlineEmail /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' rel='noopener noreferrer' href='https://pin.it/4Ft59jguR'><FaPinterest /></a>
                        <a target='_blank' className='transition-all hover:text-3xl ease-in-out text-white' rel='noopener noreferrer' href='https://x.com/miso_offical?t=cJYHnpP4WcQJYbT_ct69EA&s=09'><FaXTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
