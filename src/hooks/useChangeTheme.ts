import { useCallback, useEffect } from 'react';

export const useChangeTheme = () => {
    
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute("data-theme", theme);
    }, [])


    const handleChangeTheme = useCallback(
        () => {
        
            const currentTheme = localStorage.getItem('theme') || 'dark';
            
            const newTheme = currentTheme === 'dark' ? 'black' : 'dark';
            
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem('theme', newTheme);
        },[]
    )

    return {handleChangeTheme};
}