import { ThisDayItems } from '../ThisDayInfo/ThisDayItems'
import style from './Popup.module.scss'
import { Item } from '../ThisDayInfo/ThisDayInfo'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import { useClose } from '../../hooks/useClose';


interface Props {}

export const Popup = (props: Props) => {
  const close = useClose()
    
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
  
  const closeModals = () => {
    close.closeModal(close.close === false ? true : false )
  }
    return (
<>
  { close.close === false ? <div className={style.blur}>
      <div className={style.popup}>
          <div className={style.day}>
              <div className={style.day__temp}>20</div>
              <div className={style.day__name}>Today</div>
              <div className={style.img}>
                  <GlobalSvgSelector id="sun"/>
              </div>
              <div className={style.day__time}>
                  Time: <span>11:24</span>
              </div>
              <div className={style.day__city}>
                  City: <span>Truskavets</span>
              </div>
          </div>
          <div className={style.this__day_info_items}>{
                                  items.map(
                                    (item: Item) => 
                                    <ThisDayItems 
                                          key={item.icon_id} 
                                          item={item}/>
                                  )}
          </div>
          <div className={style.close} onClick={closeModals}>
              <GlobalSvgSelector id='close' />
          </div>
      </div>
  </div>
  :
  null
  }
</>
    )
}
