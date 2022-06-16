import { IoLogoTiktok } from 'react-icons/io5';
import { BiAddToQueue } from 'react-icons/bi';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { FaSlackHash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin, AiFillInstagram, AiOutlineLogin, AiOutlineLogout, AiOutlineMenu, AiOutlineDoubleRight } from 'react-icons/ai';
import { PropsIcon, NameIcon } from "../interfaces";



export const Icon = ({name, ...props} : PropsIcon ): JSX.Element => {

    const selectedIcon: {[key in NameIcon]: JSX.Element} = {
        'github': <AiOutlineGithub {...props}/>,
        'google': <FcGoogle {...props}/>,
        'hash': <FaSlackHash {...props}/>,
        'instagram': <AiFillInstagram {...props}/>,
        'linkedin': <AiFillLinkedin {...props}/>,
        'log-in': <AiOutlineLogin {...props}/>,
        'log-out': <AiOutlineLogout {...props}/>,
        'tiktok': <IoLogoTiktok {...props}/>,
        'twitter': <AiOutlineTwitter {...props}/>,
        'menu': <AiOutlineMenu {...props}/>,
        'mark': <BsBookmark {...props}/>,
        'mark-fill': <BsBookmarkFill {...props}/>,
        'arrow-double': <AiOutlineDoubleRight {...props}/>,
        'add-note': <BiAddToQueue {...props}/>
    }
    

    return selectedIcon[name] ?? null
}