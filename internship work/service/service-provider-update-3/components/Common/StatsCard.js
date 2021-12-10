// import styles from './StatsCard.module.scss';
import cx from 'classnames';

const StatsCard = (props) => {
    let stats = null;
    if(props.stats.additional_stats.length) {
        stats = <div className={ cx('stats-card-additional-stats') }>
            <ul>
                { 
                    props.stats.additional_stats.map(stat => (
                        <li key={stat.name} title={`${stat.name}: ${stat.value}`}>
                            <span className={ cx('stat-value') }>{stat.value}</span>
                            <span className={ cx('stat-name') }>{stat.name}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    }

    return (
        <div className={ cx('stats-card', props.stats.class) }>
            <div className={ cx('stats-card-icon') }>
                <span className="material-icons">{ props.stats.icon }</span>
            </div>
            <h6 className={ cx('stats-card-data', 'mt-4') }>{ props.stats.value }</h6>
            <p className={ cx('stats-card-name') }>{ props.stats.label }</p>
            { stats }
        </div>
    )
}

export default StatsCard
