import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import { Day } from './Days'
import style from './Days.module.scss'

interface Props {
    day: Day;
}

export const Card = ({day}: Props) => {
    return (
        <div className={style.card}>
            <div className={style.day}><span className='value'>{day.day}</span></div>
            <div className={style.day__info}>{day.day_info}</div>
            <div className={style.img}>
                <GlobalSvgSelector id={day.icon_id}/>
            </div>
            <div className={style.day__temp_day}>{day.temp_day}</div>
            <div className={style.day__temp_night}>{day.temp_night}</div>
            <div className={style.day__info}>{day.info}</div>
        </div>
    )
}
