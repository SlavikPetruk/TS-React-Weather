import axios from 'axios';
import { useEffect, useState } from 'react';
import { Weather, WeatherDays } from '../../redux/types';
import { Card } from './Card';
import style from './Days.module.scss'
import {Tabs} from './Tabs'

interface Props {
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
  const [fiveDays, setFiveDays] = useState<WeatherDays[]>([]);
  
  let curDate = new Date()
    const wekDays = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота']
    const months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Груд'];

    let weekArr = []
    for (let index = 1; index < 8; index++) {
      weekArr.push(wekDays[Math.abs(7-(curDate.getDay()+index))])
    }
    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      const resp = await axios.get<WeatherDays[]>(
        'https://api.openweathermap.org/data/2.5/onecall?lat=50.44&lon=30.52&exclude=hourly,minutely&appid=366f3b80aaa467d8d0515f18bc018ed1&units=metric'
        )
      setFiveDays(resp.data) 
    }

    console.log(fiveDays)
  
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
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь и солнце',
        },
        {
          day: `${weekArr[1]}`,
          day_info: `${curDate.getDate()+2} ${months[curDate.getMonth()]}`,
          icon_id: 'small_rain',
          temp_day: `${fiveDays}`,
          temp_night: '+15',
          info: 'небольшой дождь',
        },
        {
          day: `${weekArr[2]}`,
          day_info: `${curDate.getDate()+3} ${months[curDate.getMonth()]}`,
          icon_id: 'mainly_cloudy',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: `${weekArr[3]}`,
          day_info: `${curDate.getDate()+4} ${months[curDate.getMonth()]}`,
          icon_id: 'rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: `${weekArr[4]}`,
          day_info: `${curDate.getDate()+5} ${months[curDate.getMonth()]}`,
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: `${weekArr[5]}`,
          day_info: `${curDate.getDate()+6} ${months[curDate.getMonth()]}`,
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
            {days.map((day: Day) => <Card day={day} key={day.day_info}/>)}
        </div>

        </>

    )
}
