import { useEffect } from 'react';
export const useChangeTheme = () => {
    
    useEffect(() => {
        const theme = localStorage.getItem('theme') ?? 'dark';
        document.documentElement.setAttribute("data-theme", theme);
    }, [])


    const handleChangeTheme = () => {
        const currentTheme = localStorage.getItem('theme') ?? 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return handleChangeTheme;
}