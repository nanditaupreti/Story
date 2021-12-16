import React from 'react';
import CardTemplate from '../Profile/card-template';
// import styles from '../../styles/components/Card4.module.scss';
import { Button, Divider } from 'antd';
import EditIcon from '@material-ui/icons/Edit';
import styles from './SettingCard.module.scss'

const Card4 = (props) =>{
    const OpenModal = () =>{
        props.modal("Categories");
    }

   return( <div className="card card2 p-0" style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
            <div className={styles['card-header-container']}>
                <h5 className="mt-10 mb-10 pl-27 pr-27 fz-18">Booking & Payments</h5>
                <Divider className="mt-5 mb-0"></Divider>
            </div>
            
            <div className="pt-20 pl-27 pr-37">
                <div className={styles['anpa-container-content']}>
                    <div>
                        <strong>{"Categories"}</strong>
                        <span>Beauty Shop</span>
                        </div>
                        
                        <div>
                            <strong>{"Sub Categories"}</strong>
                            <span>Beauty Salon</span>
                        </div>

                                        
                        
        </div>

            </div>

            <Divider className="mt-12 mb-12"></Divider>
            <div className={styles['bottom-btn-container']}>
            <div>
                <Button className="primary small mr-33" type="link" onClick={() =>OpenModal()}><span className="icon-wrap"><EditIcon /></span>Edit Details</Button>
            </div>
        </div>
        </div>
   )

}
export default Card4;


