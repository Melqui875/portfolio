import { useToggle } from '../hooks/useToggle.js'
import '../toggleStyle.css'
export function ToggleTheme () {
    const {isDarkMode, checkText, setIsDarkmode} = useToggle();
    console.log('Render'); // Por qué se renderiza 2 veces?
    return (
        <div className="toggleContainer">
            <input
                className="toggle"
                type="checkbox"
                onChange={() => { setIsDarkmode(!isDarkMode)}}
                id="check"
            />
            <label htmlFor="check">{checkText}</label>
        </div>
    )
}