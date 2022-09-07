import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import { Weather } from '../../redux/types'
import style from './ThisDay.module.scss'

interface Props {
    weather: Weather;
}

const now = new Date()

export const ThisDay = ({weather}: Props) => {
    return (
        <div className={style.this__day}>
            <div className={style.top__block}>
                <div className={style.top__block_wrapper}>
                    <div className={style.this__temp}>
                        {Math.floor(weather.main.temp)}°
                        
                        </div>
                    <div className={style.this__day_name}>Today</div>
                </div>        
                <GlobalSvgSelector id="sun" />        
            </div>
            <div className={style.bottom__block}>
                <div className={style.this__time}>Time: 
                <span className='value'>  {`${now.getHours()} : ${now.getMinutes()}`}
                    </span>
                </div>
                <div className={style.this__city}>City: <span className='value'>{weather.name}</span></div>   
            </div>
        </div>
    )
}
