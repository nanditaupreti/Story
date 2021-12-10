import React from 'react';
import { red } from '@material-ui/core/colors';
import { Button, Divider } from 'antd';
import styles from '../../styles/components/Subscription-Tier-Modal.module.scss';
import SubscriptionCard from '../Common/SubscriptionCard';
import SubscriptionCard2 from './SubscritionCard2';

const SubscriptionTiersModal = () =>{
   
    const subscriptions = [
        {
            price: 60,
            desc: `Per Month, Billed Annually or 
            $5 Month - to - Month`,
            title: 'Basic',
            sub_title: 'Basic Plan Features',
            features: [
                { name: 'Upcoming booking visibility', value: '7 Days', available: true},
                { name: 'Past Booking visibility', value: '7 Days', available: true},
                { name: 'Branches', value: 'Upto 5', available: true},
                { name: 'Category', value: '2', available: true},
                { name: 'Sub-Category', value: '1', available: true},
                { name: 'Menu', value: '3 Titles', available: true},
                { name: 'Staff Management', value: 'No', available: false},
                { name: 'Gift Card Creation', value: 'No', available: false},
                { name: 'Reports', value: '7 Days', available: true},
                { name: 'SP Policy ', value: 'Regular Season ONLY', available: true},
                { name: 'Other related functionality', value: 'No', available: false},
            ],
            button_txt: '',
            currentPlan : false,
            is_premium: false,
            downgrade: false,
            isDiscount: false,
        },
        {
            price: 180,
            desc: `Per Month, Billed Annually or 
            $15 Month - to - Month`,
            title: 'Standard',
            sub_title: 'Standard Plan Features',
            features: [
                { name: 'Upcoming booking visibility', value: '14 Days', available: true},
                { name: 'Past Booking visibility', value: '14 Days', available: true},
                { name: 'Branches', value: 'Upto 10', available: true},
                { name: 'Category', value: '4', available: true},
                { name: 'Sub-Category', value: '3', available: true},
                { name: 'Menu', value: '6 Titles', available: true},
                { name: 'Staff Management', value: 'Upto 25', available: true},
                { name: 'Gift Card Creation', value: 'Yes', available: true},
                { name: 'Reports', value: '14 Days', available: true},
                { name: 'SP Policy ', value: 'Regular + High Seasons', available: true},
                { name: 'Other related functionality', value: 'Yes', available: true},
            ],
            button_txt: '',
            currentPlan : true,
            downgrade: true,
            isDiscount: false,
            is_premium: true
        },
        {
            price: 1200,
            desc: `Per Month, Billed Annually or 
            $120 Month - to - Month`,
            title: 'Professional',
            sub_title: 'Professional Plan Features',
            features: [
                { name: 'Upcoming booking visibility', value: '30 Days', available: true},
                { name: 'Past Booking visibility', value: '30 Days', available: true},
                { name: 'Branches', value: 'Unlimited', available: true},
                { name: 'Category', value: '12', available: true},
                { name: 'Sub-Category', value: '5', available: true},
                { name: 'Menu', value: '18 Titles', available: true},
                { name: 'Staff Management', value: 'Unlimited', available: true},
                { name: 'Gift Card Creation', value: 'Yes', available: true},
                { name: 'Reports', value: '30 Days', available: true},
                { name: 'SP Policy ', value: 'Regular + High Seasons', available: true},
                { name: 'Other related functionality', value: 'Yes', available: true},
            ],
            button_txt: 'Grab Offer Now',
            currentPlan : false,
            isDiscount : true,
            discountPrice : 1081,
            downgrade: true,
            is_premium: false
        }
    ]
   

    return(
        <section className="mt-30 mb-50">
            <h2 className="txt center pull none">Service Provider Subscription Tiers</h2>
            <h4 className="txt center pull none">Choose the best one that fits your needs</h4>
            <div className="center-text pull none mt-20">
                {/* <Switch></Switch> */}
            </div>
            <div className="subscriptions mt-50">
                { subscriptions.map((feature, i) => <SubscriptionCard2 key={i} subscription={feature}/>) }
            </div>
        </section>
        // <div className={styles['main-modal-container']}>
        //     <div className={styles['mmc-l']}>
        //         <div className={styles['active-plan-features-container']}>
        //             <h5 className="mt-20 auto-width">Basic</h5>
        //             <div className={styles['active-plan-price']}>
        //                 <div className={styles['app-text']}>
        //                     <h3>$</h3>
        //                     <h1 className="fz-70">60</h1>
        //                 </div>
        //             </div>
        //             <h5 className="fz-40 auto-width" style={{borderRadius : "0px"}}>Month</h5>

        //             <div className={styles['act-pln-mc']}>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Upcoming booking visibility</h6>
        //                     <strong> 7 Days</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Past Booking visibility</h6>
        //                     <strong> 7 Days</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Branches</h6>
        //                     <strong> Upto 5</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Category</h6>
        //                     <strong> 2</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Sub-Category</h6>
        //                     <strong> 2</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Category</h6>
        //                     <strong> 1</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Menu</h6>
        //                     <strong> 3 Titles</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Staff Management</h6>
        //                     <strong> No</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Gift Card Creation</h6>
        //                     <strong> No</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Reports</h6>
        //                     <strong> 7 Days</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Staff Management</h6>
        //                     <strong> No</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">SP Policy</h6>
        //                     <strong> Regular Season</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content']}>
        //                     <h6 className="fz-13">Other related functionality</h6>
        //                     <strong> No</strong>
        //                 </div>

        //             </div>

        //             <Button className="primary mt-20">Upgrade Plan</Button>
        //         </div>
           
        //     </div>
        //     <div className={styles['mmc-r']}>
        //         <div className={styles['active-plan-features-container-r']}>
        //             <h5 className="mt-20 auto-width">Basic</h5>
        //             <div className={styles['active-plan-price-r']}>
        //                 <div className={styles['app-text-r']}>
        //                     <h3></h3>
        //                     <h1 className="fz-70"></h1>
        //                 </div>
        //             </div>
        //             <h5 className="fz-40 auto-width" style={{borderRadius : "0px"}}>Plan Usage</h5>

        //             <div className={styles['act-pln-mc-r']}>
        //             <div className={styles['act-pln-mc-content-r']}>
        //                     <h6 className="fz-13">Remaining Bookings</h6>
        //                     <strong> 30</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content-r']}>
        //                     <h6 className="fz-13">Validity Remaining</h6>
        //                     <strong> 7 Days</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content-r']}>
        //                     <h6 className="fz-13">Branches</h6>
        //                     <strong> Upto 5</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content-r']}>
        //                     <h6 className="fz-13">Category</h6>
        //                     <strong> 2</strong>
        //                 </div>
        //                 <Divider className="mt-5 mb-5"></Divider>
        //                 <div className={styles['act-pln-mc-content-r']}>
        //                     <h6 className="fz-13">Next Billing Date</h6>
        //                     <strong style={{color : "red"}}> 15 March 2022</strong>
        //                 </div>
        //             </div>

        //             {/* <Button className="primary mt-20">Upgrade Plan</Button> */}
        //         </div>
           
        //     </div>
        // </div>
    
        // <h3>Plan</h3>
    )
}

export default SubscriptionTiersModal;