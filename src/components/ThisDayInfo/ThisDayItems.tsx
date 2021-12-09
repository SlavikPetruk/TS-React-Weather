import style from './ThisDayInfo.module.scss'
import { Item } from './ThisDayInfo'
import { IndicatorSvgSelector } from '../../assets/icons/IndicatorSvgSelector'

interface Props {
    item: Item
}

export const ThisDayItems = ({item}: Props) => {
    const {icon_id, name, value} = item
    return (
        <div className={style.item}>
            <div className={style.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <div className={style.indicator__name}>{name}</div>
            <div className={style.indicator__value}><span className='value'>{value}</span></div>
        </div>
    )
}
