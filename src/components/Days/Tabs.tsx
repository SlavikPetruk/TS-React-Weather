import style from './Days.module.scss'

interface Props {}

export const Tabs = (props: Props) => {
    const tabs = [
        {
          value: 'На неделю',
        },
        {
          value: 'На 10 дней',
        },
        {
          value: 'На месяц',
        },
      ];
    return (
        <div className={style.tabs}>
            <div className={style.tabs__warpper}>
                {tabs.map(tab => 
                    <div key={tab.value} className={style.tab}>{tab.value}</div>
                )}
            </div>
            <div className={style.cancel}>cancel</div>
        </div>
    )
}
