import style from './Header.module.scss'
import {GlobalSvgSelector} from '../../assets/icons/GlobalSvgSelector'
import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme'
import { Theme } from '../../hooks/usecontext/ThemeContext'


export const Header = () => {
    const theme = useTheme();
    const options = [
        { value: 'city1', label: 'Kiev' },
        { value: 'city2', label: 'Truskavets' },
        { value: 'city3', label: 'Lviv' }
      ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: Theme.LIGHT ? '#4f4f4f' : 'rgba(71,147,255,0.2)',
            heigth: '37px',
            width: '194px',
            border: 'none',
            borderRadius:'10px',
            zIndex: '100'
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: Theme.LIGHT ? '#fff' : '#000'
        })
    }

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT )
    }


    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}><img src='/weather.png' alt='weather'  /></div>
                <div className={style.title}>React Weather</div>
            </div>
            <div className={style.wrapper}>
                <div className={style.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select 
                    defaultValue={options[0]} 
                    options={options} 
                    styles={colourStyles}/>
            </div>
        </header>
    )
}
