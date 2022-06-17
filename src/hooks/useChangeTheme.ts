import { useCallback, useEffect } from 'react';

export const useChangeTheme = () => {
    
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute("data-theme", theme);
    }, [])


    const handleChangeTheme = useCallback(
        () => {
        
            const currentTheme = localStorage.getItem('theme') || 'dark';
            console.log({currentTheme})
            const newTheme = currentTheme === 'dark' ? 'synthwave' : 'dark';
            console.log({newTheme})
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem('theme', newTheme);
        },[]
    )

    return {handleChangeTheme};
}