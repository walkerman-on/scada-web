import { useTheme } from 'app/providers/ThemeProvider';
import DarkThemeIcon from 'shared/assets/icons/DarkThemeIcon';
import { Theme } from 'app/providers/ThemeProvider';
import LightThemeIcon from 'shared/assets/icons/LightThemeIcon';
import cl from "./ThemeSwitcher.module.scss"

export const ThemeSwitcher = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className = {cl.ThemeSwitcher} onClick={changeTheme}>
            {theme === Theme.DARK ? <DarkThemeIcon/> : <LightThemeIcon/>}
        </div>
    );
};
