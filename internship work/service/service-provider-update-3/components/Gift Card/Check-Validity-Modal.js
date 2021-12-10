import { Button, Input, Form, Divider } from 'antd';
import React from 'react';
import styles from './CheckValidityModal.module.scss'

const CheckValidityModal = () =>{
    return(
        <div className={styles['modal-container']}>
            <div className={styles['mc-l']}>
                <h6>Gift Card 1 <span className="txt weight400 fz-14">#22AW-L8CT-20</span></h6>
                <h5 className="txt green-2">$150.00</h5>
                <span className="fz-16 weight400 mb-26 txt green-2">Available Balance</span>
                <span className="txt weight700">Valid For</span>
                <span>15 Nov, 2020 - 15 Dec, 2021</span>
            </div>
            {/* <Divider type="vertical" className={styles['divider']}></Divider> */}
            <div className={styles['mc-r']}>
                <Form>
                    <Form.Item className="mb-40" label="Redeem Value">
                        <Input placeholder="$0.00" className="h43"></Input>
                    </Form.Item>
                    <Form.Item>
                        <div>
                            <Button className="mr-16 mb-10">Cancel</Button>
                            <Button className="txt primary">Redeem Value</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default CheckValidityModal;