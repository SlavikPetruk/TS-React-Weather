import { useEffect } from 'react'
import { Days } from '../../components/Days/Days'
import { ThisDay } from '../../components/ThisDay/ThisDay'
import { ThisDayInfo } from '../../components/ThisDayInfo/ThisDayInfo'
import { useCustomDispatch, useCustomSelector } from '../../hooks/useCustomDispatch'
import { fetchCurrentWeather } from '../../redux/currentWeather_fetch'
import { selectCurrentWeatherData } from '../../redux/selectors'
import s from './Home.module.scss'


export const Home = () => {
    const dispatch = useCustomDispatch()
    const { weather } = useCustomSelector(selectCurrentWeatherData);
  
    useEffect(() => {
      dispatch(fetchCurrentWeather('kiev'));
    }, [dispatch]);

    return (
      <div className={s.home}>
        <div className={s.wrapper}>
          <ThisDay weather={weather} />
          <ThisDayInfo weather={weather}/>
        </div>
        <Days weather={weather}/>
      </div>
    );
  };