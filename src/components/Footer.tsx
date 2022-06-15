import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { IoLogoTiktok } from 'react-icons/io5';
import { FaSlackHash } from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer className="footer gap-4 items-center p-2 bg-neutral text-neutral-content fixed bottom-0 left-0 flex justify-between flex-col sm:flex-row">
            <div className="flex justify-center items-center">
                <FaSlackHash className='text-4xl' />
                <p className='m-0'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div className="flex justify-center items-center">
                <a target='_blank' href="https://twitter.com/Frankomtz361" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <AiOutlineTwitter className='text-4xl' />
                </a>
                <a target='_blank' href="https://github.com/Franklin361" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <AiOutlineGithub className='text-4xl' />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/franklin-martinez-lucas-a25394213" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <AiFillLinkedin className='text-4xl' />
                </a>
                <a target='_blank' href="https://www.tiktok.com/@frankomtzl361?is_from_webapp=1&sender_device=pc" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <IoLogoTiktok className='text-3xl' />
                </a>
                <a target='_blank' href="https://www.instagram.com/frankomtzl361" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <AiFillInstagram className='text-4xl' />
                </a>
            </div>
        </footer>
    )
}