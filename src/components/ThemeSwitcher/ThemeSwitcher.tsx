import styles from './ThemeSwitcher.module.scss';
import {ReactComponent as MoonIcon} from 'assets/icon-moon.svg'
import {ReactComponent as SunIcon} from 'assets/icon-sun.svg'
import {useEffect, useState} from "react";

export const ThemeSwitcher = () => {
    const [isDark, setDark] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    },[isDark])

    const themeText = isDark ? 'Light' : 'Dark';
    const ThemeIcon = isDark ? SunIcon : MoonIcon;

    const onDivSetDarkClick = () => setDark(!isDark)

    return (
        <div className={styles.switcher} onClick={onDivSetDarkClick}>
            <span>{themeText}</span>
            <ThemeIcon className={styles.icon}/>
        </div>
    )
}
