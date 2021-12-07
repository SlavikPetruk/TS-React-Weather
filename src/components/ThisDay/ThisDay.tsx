import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import style from './ThisDay.module.scss'

interface Props {
    
}

export const ThisDay = (props: Props) => {
    return (
        <div className={style.this__day}>
            <div className={style.top__block}>
                <div className={style.top__block_wrapper}>
                    <div className={style.this__temp}>20*</div>
                    <div className={style.this__day_name}>Today</div>
                </div>        
                <GlobalSvgSelector id="sun" />        
            </div>
            <div className={style.bottom__block}>
                <div className={style.this__time}>Time: <span>15:42</span></div>
                <div className={style.this__city}>City: <span>Truskavets</span></div>   
            </div>
        </div>
    )
}
