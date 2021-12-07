import { Days } from '../../components/Days/Days'
import { ThisDay } from '../../components/ThisDay/ThisDay'
import { ThisDayInfo } from '../../components/ThisDayInfo/ThisDayInfo'
import style from './Home.module.scss'


export const Home = () => {
    return (
        <>
        <div className={style.wrapper}>
            <ThisDay/>
            <ThisDayInfo/>
        </div>
        <Days/>
        </>
    )
}
