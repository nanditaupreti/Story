import cx from 'classnames';
import { Button, Divider, Tooltip } from 'antd';
import { InfoOutlined } from '@material-ui/icons'

const SubscriptionCard2 = (props : any) => {

    const onClick = () => {
        props.click();
    }

    return (
    <>
            

            <div style={{position : "relative"}} className={ cx('subscription-card', props.subscription.is_premium ? 'premium' : '') }>
                
                {props.subscription.downgrade == false ? 
                <span className="mb-10 fz-13 txt danger"><strong>Downgrade Not Allowed</strong></span>
                : 
                <>
                </>
                }

                {props.subscription.currentPlan == true ? 
                
                <span className="mb-10 fz-13" ><strong>Current Plan Valid Till: <span className="txt danger">3 May 2021</span></strong></span>
                : 
                <>
                </>
                }
                
                {props.subscription.isDiscount == true ? 
                <div>
                    <strong>Purchase it now at <strong className="txt danger">$119 OFF</strong></strong>
                        <Tooltip className={cx('modified-tooltip', 'tooltip')} title="Effective price based on utilization of your current plan">
                            <InfoOutlined className="ml-5"/>
                        </Tooltip>
                    <div className="flex center-content">
                        <h4 className="subscription-price" style={{position : "relative", color : "var(--dark-neutral-3)"}}>${ props.subscription.price }</h4>
                        <Divider className="" style={{position : "absolute",width : "94px", minWidth : "91px", background : "red", right : "160px", top : "61px"}}></Divider>
                        <h2 className="subscription-price">${ props.subscription.discountPrice }</h2>
                    </div>
                </div> 
                : 
                <h2 className="subscription-price">${ props.subscription.price }</h2>
                }

                <p className="subscription-desc">{ props.subscription.desc }</p>
                <h3 className="subscription-title">{ props.subscription.title }</h3>
                <p className="subscription-sub-title">{ props.subscription.sub_title }</p>
                <ul className="subscription-features">
                    { props.subscription.features.map((feature : any, i: any) => <><li key={i} className="subscription-feature-name">{feature.name}</li><li key={`val-${i}`} className={cx(feature.available ? 'available' : 'not-available', 'value')}>{feature.value}</li></>) }
                </ul>
                {
                    props.subscription.button_txt.length > 1 ? 
                    <Button onClick={onClick} className={ cx('subscription-button full-width', props.subscription.is_premium ? 'secondary' : 'primary')}>{ props.subscription.button_txt }</Button>
                    
                    : 
                    <>
                    </>
                }
            </div>
    </>
    )
}

export default SubscriptionCard2
