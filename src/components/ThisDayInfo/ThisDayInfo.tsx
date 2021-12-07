import cloud from '../../assets/images/cloud.png'
import style from './ThisDayInfo.module.scss'
import { ThisDayItems } from './ThisDayItems';

interface Props {}
export interface Item {
    icon_id: string;
    name: string;
    value: string
  }

export const ThisDayInfo = (props: Props) => {
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура',
          value: '20° - ощущается как 17°',
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: '765 мм ртутного столба - нормальное',
        },
        {
          icon_id: 'precipitation',
          name: 'Осадки',
          value: 'Без осадков',
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: '3 м/с юго-запад - легкий ветер',
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