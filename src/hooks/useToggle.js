import { useEffect, useState } from "react"

export function useToggle() {
    const documentBody = document.body.classList;
    // Estados
    const [isDarkMode, setIsDarkmode] = useState(() => {
        const isDarkFromLocalStorage = window.localStorage.getItem('isDarkMode'); // Recuperamos el modo
        return isDarkFromLocalStorage ?? false // Verificamos si tiene darkmode
    });
    const checkText = !isDarkMode ? 'Light' : 'Dark';
    // Practica use Effect
    useEffect(() => {
        if (isDarkMode) {
            window.localStorage.setItem('isDarkMode', isDarkMode); // Guardamos el theme en el local storage
            documentBody.toggle('dark-mode')
        }
        return () => {
            window.localStorage.removeItem('isDarkMode'); // Quitamos el theme en el local storage
            documentBody.remove('dark-mode')
        }
    }, [isDarkMode])
    return { isDarkMode, checkText, setIsDarkmode}
}