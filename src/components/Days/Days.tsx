import { Weather } from '../../redux/types';
import { Card } from './Card';
import style from './Days.module.scss'
import {Tabs} from './Tabs'

type Props = {
  weather: Weather
}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
  }

export const Days = ({weather}: Props) => {
  
  let curDate = new Date()
    const wekDays = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота']
    const months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Груд'];

    let weekArr = []
    for (let index = 1; index < 8; index++) {
      weekArr.push(wekDays[Math.abs(7-(curDate.getDay()+index))])
    }
  
    const days: Day[] = [
        {
          day: 'Сьогодні',
          day_info: `${curDate.getDate()} ${months[curDate.getMonth()]}`,
          icon_id: 'sun',
          temp_day: `${Math.floor(weather.main.temp_max)}° C`,
          temp_night: `${Math.floor(weather.main.temp_min)}° C`,
          info: 'Облачно',
        },
        {
          day: `${weekArr[0]}`,
          day_info: `${curDate.getDate()+1} ${months[curDate.getMonth()]}`,
          icon_id: 'small_rain_sun',
          temp_day: `${Math.floor(weather.main.temp_max)+3}° C`,
          temp_night: `${Math.floor(weather.main.temp_min)+1}° C`,
          info: 'небольшой дождь и солнце',
        },
        {
          day: `${weekArr[1]}`,
          day_info: `${curDate.getDate()+2} ${months[curDate.getMonth()]}`,
          icon_id: 'small_rain',
          temp_day: `${Math.floor(weather.main.temp_max)+6}° C`,
          temp_night: `${Math.floor(weather.main.temp_min)+2}° C`,
          info: 'небольшой дождь',
        },
        {
          day: `${weekArr[2]}`,
          day_info: `${curDate.getDate()+3} ${months[curDate.getMonth()]}`,
          icon_id: 'mainly_cloudy',
          temp_day: `${Math.floor(weather.main.temp_max)+2}° C`,
          temp_night: `${Math.floor(weather.main.temp_min)+3}° C`,
          info: 'Облачно',
        },
        {
          day: `${weekArr[3]}`,
          day_info: `${curDate.getDate()+4} ${months[curDate.getMonth()]}`,
          icon_id: 'rain',
          temp_day: `${Math.floor(weather.main.temp_max)+7}° C`,
          temp_night: `${Math.floor(weather.main.temp_min)+4}° C`,
          info: 'Облачно',
        },
        {
          day: `${weekArr[4]}`,
          day_info: `${curDate.getDate()+5} ${months[curDate.getMonth()]}`,
          icon_id: 'sun',
          temp_day: `${Math.floor(weather.main.temp_max)-1}° C`,
          temp_night: `${Math.floor(weather.main.temp_min)-4}° C`,
          info: 'Облачно',
        },
        {
          day: `${weekArr[5]}`,
          day_info: `${curDate.getDate()+6} ${months[curDate.getMonth()]}`,
          icon_id: 'sun',
          temp_day: `${Math.floor(weather.main.temp_max)-3}° C`,
          temp_night: `${Math.floor(weather.main.temp_min)-6}° C`,
          info: 'Облачно',
        },
      ];

      

    return (
        <>
        <Tabs/>
        <div className={style.days}>
            {days.map((day: Day) => <Card day={day} key={day.day_info}/>)}
        </div>

        </>

    )
}
