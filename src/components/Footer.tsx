import { Icon } from "../assets"


export const Footer = () => {
    return (
        <footer className="footer gap-4 items-center p-2 bg-neutral text-neutral-content fixed bottom-0 left-0 flex justify-between flex-col sm:flex-row">
            <div className="flex justify-center items-center">
                <Icon name="hash" className='text-4xl' />
                <p className='m-0'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div className="flex justify-center items-center">
                <a target='_blank' href="https://twitter.com/Frankomtz361" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <Icon name="twitter" className='text-4xl' />
                </a>
                <a target='_blank' href="https://github.com/Franklin361" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <Icon name="github" className='text-4xl' />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/franklin-martinez-lucas-a25394213" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <Icon name="linkedin" className='text-4xl' />
                </a>
                <a target='_blank' href="https://www.tiktok.com/@frankomtzl361?is_from_webapp=1&sender_device=pc" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <Icon name="tiktok" className='text-3xl' />
                </a>
                <a target='_blank' href="https://www.instagram.com/frankomtzl361" className='m-0 hover:bg-indigo-900 rounded-full p-2'>
                    <Icon name="instagram" className='text-4xl' />
                </a>
            </div>
        </footer>
    )
}