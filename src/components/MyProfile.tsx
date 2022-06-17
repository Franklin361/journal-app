import { useLocation } from "react-router-dom"

export const MyProfile = () => {

    const { pathname } = useLocation();

    return (
        <a className={`profile ${ pathname === '/' ? '' : 'fixed-profile'}`} 
            href='https://franklin-dev.netlify.app' target='_blank'>
            <img
                src='https://res.cloudinary.com/dnxchppfm/image/upload/v1646245949/perfil_vpgbfg.webp'
                alt='profile'
                width={50}
            />
            <p> <span>Created by: </span> Franklin Martinez</p>
        </a>
    )
}