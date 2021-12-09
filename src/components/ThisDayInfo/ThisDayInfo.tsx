import cloud from '../../assets/images/cloud.png'
import { Weather } from '../../redux/types';
import style from './ThisDayInfo.module.scss'
import { ThisDayItems } from './ThisDayItems';

interface Props {weather: Weather}
export interface Item {
    icon_id: string;
    name: string;
    value: string
  }

export const ThisDayInfo = ({weather}: Props) => {
  console.log({weather})
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура',
          value: `${Math.floor(weather.main.temp)}° C`,
        },
        {
          icon_id: 'pressure',
          name: 'Тиск',
          value: `${weather.main.pressure} мм ртутного стовпчика`,
        },
        {
          icon_id: 'precipitation',
          name: 'Опади',
          value: 'Без осадків',
        },
        {
          icon_id: 'wind',
          name: 'Вітер',
          value:  `${weather.wind.speed} m/s південно-західний - легкий вітер`,
        },
      ];
    return (
        <div className={style.this__day_info}>
            <div className={style.this__day_info_items}>{
                                    items.map(
                                      (item: Item) => 
                                      <ThisDayItems 
                                            key={item.icon_id} 
                                            item={item}/>
                                    )}
            </div>
            <img className={style.cloud__img} src={cloud} alt="cloud" />
        </div>
    )
}
