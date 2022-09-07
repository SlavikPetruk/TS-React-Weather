import style from './Days.module.scss'

interface Props {}

export const Tabs = (props: Props) => {
    const tabs = [
        {
          value: 'На тиждень',
        },
        {
          value: 'На 10 днів',
        },
        {
          value: 'На місяць',
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
