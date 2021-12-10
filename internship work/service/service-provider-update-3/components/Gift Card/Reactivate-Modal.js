import {Divider, Form, Input, InputNumber} from 'antd';
import React from 'react';
import styles from './Reactivate-Modal.module.scss'

import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;


const ReactivateModal = () =>{
    
    
    const dateFormat = 'YYYY/MM/DD';
    function onChange(value) {
        console.log('changed', value);
    }

    return(
        <div>
            <Form>
                <Form.Item>
                    <div className={styles['container']}>
                        <Form.Item label="Gift Card Name">
                            <Input placeholder="Gift Card 1"></Input>
                        </Form.Item>
                        <Form.Item label="Code (Auto Generated)">
                            <Input placeholder="SP 22AW-L8CT-20"></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                
              
                <Divider className="mt-30 mb-21"></Divider>
                 
                <Form.Item>
                    <h5 className="mb-16">Validity</h5>
                    <div className={styles['container']}>
                        <Form.Item label="Valid For">
                            <div className={styles['vfc']}>
                                <InputNumber width={50} min={1} max={10} defaultValue={3} onChange={onChange} />
                                <InputNumber width={50} min={1} max={10} defaultValue={3} onChange={onChange} />
                                <span>After Purchade</span>
                            </div>
                        </Form.Item>
                    </div>
                </Form.Item>
            </Form>
            <Form>
                <Divider className="mt-30 mb-16"></Divider>              
                
                <Form.Item>
                    <h5 className="mb-16 txt weight400">Dates</h5>
                    <div className={styles['container-flex']}>
                        <Form.Item style={{width : "50% !important"}}>
                            {/* <RangePicker defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]} format={dateFormat} /> */}
                            <Space direction="vertical">
                                <DatePicker onChange={onChange} />
                            </Space>
                        </Form.Item>
                        <span className="ml-10 mr-10">to</span>
                        <Form.Item style={{width : "50% !important"}}>
                            {/* <RangePicker defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]} format={dateFormat} /> */}
                            <Space direction="vertical">
                                <DatePicker onChange={onChange} />
                            </Space>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={styles['pvq-container']}>
                       <Form.Item label="Price">
                            <InputNumber width={50} min={1} max={10} defaultValue={3} onChange={onChange} />
                       </Form.Item>
                       <Form.Item label="Value">
                            <InputNumber width={50} min={1} max={10} defaultValue={3} onChange={onChange} />
                       </Form.Item>
                       <Form.Item label="Quality">
                            <InputNumber width={50} min={1} max={10} defaultValue={3} onChange={onChange} />
                       </Form.Item>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ReactivateModal;