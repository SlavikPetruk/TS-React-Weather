import { Weather } from '../../redux/types';
import { Card } from './Card';
import style from './Days.module.scss'
import {Tabs} from './Tabs'

interface Props {weather: Weather}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
  }
  

export const Days = ({weather}: Props) => {
    const days: Day[] = [
        {
          day: 'Сегодня',
          day_info: `${Math.floor((weather.dt)/3600)}`,
          icon_id: 'sun',
          temp_day: `${Math.floor(weather.main.temp_max)}° C`,
          temp_night: `${Math.floor(weather.main.temp_min)}° C`,
          info: 'Облачно',
        },
        {
          day: 'Завтра',
          day_info: '29 авг',
          icon_id: 'small_rain_sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь и солнце',
        },
        {
          day: 'Ср',
          day_info: '30 авг',
          icon_id: 'small_rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь',
        },
        {
          day: 'Чт',
          day_info: '28 авг',
          icon_id: 'mainly_cloudy',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Пт',
          day_info: '28 авг',
          icon_id: 'rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Сб',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Вс',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
      ];
    return (
        <>
        <Tabs/>
        <div className={style.days}>
            {days.map((day: Day) => <Card day={day} key={day.day}/>)}
        </div>
        </>

    )
}
