import styles from './../styles/components/AllListing.module.scss'

export default function AllListing(){
    
    let listItems = [{logo : "check_box_outline_blank",name : "Holiday Promo",status : "Paused",impressions : "100",clicks : "100",active_date : "12 Dec, 2020 -12 Feb, 2020",average_daily_spent : "$1.00",total_spent : "$100.00",actions : ""},{logo : "check_box_outline_blank",name : "December Promo",status : "Active",impressions : "100",clicks : "100",active_date : "Ongoing",average_daily_spent : "$1.00",total_spent : "$1.00",actions : ""}];

    return(
        <>
            {listItems.map((obj) =>{
                return(
                    <div key={obj.name} className={styles['all_list_columns']}>
                            <span className="material-icons">check_box_outline_blank</span>
                            <div className="">{obj.name}</div>
                            <div className="">{obj.status}</div>
                            <div className="">{obj.impressions}</div>
                            <div className="">{obj.clicks}</div>
                            <div className="">{obj.active_date}</div>
                            <div className="">{obj.average_daily_spent}</div>
                            <div className="">{obj.total_spent}</div>
                            <span className="material-icons">more_vert</span>
                    </div>
                );
            })}
        </>
    );
}
