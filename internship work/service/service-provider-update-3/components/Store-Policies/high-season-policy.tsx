// import React from 'react';
// import { Switch, Form, Input, InputNumber, Select, Divider, Button } from 'antd';
// import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
// import { Option } from 'rc-select';
// import styles from '../../styles/components/Store-Policies.module.scss'
// import EditIcon from '@material-ui/icons/Edit';


// const HighSeasonPolicyCards = (props : any) =>{

//     let onSwitch = (event : any) => props.card.visibleToStore = event;
    
//     function onChange(value : any) {
//         console.log('changed', value);
//     }

//     function handleChange(value : any) {
//         console.log(`selected ${value}`);
//     }

//     return(
//         <div className="card card2 pt-24 pl-34 pr-80 mb-25">
//                     <h5>{props?.obj?.title}
//                         <span className="ml-30">                      
//                             <Switch
//                             className="ml-0" size="small"
//                             checkedChildren={<CheckOutlined />}
//                             unCheckedChildren={<CloseOutlined />}
//                             onChange={ onSwitch }
//                             />
//                         </span>
//                     </h5>
        
//                     <Divider className="mb-13"></Divider>
        
//                     <Form>
        
//                         <Form.Item>
//                             <div className={styles['grid-container']}>
//                                 <Form.Item label={<div className="mb-27">{props?.obj?.field1}</div>}>
//                                         <div className={styles['grid-setup']}>
//                                             <InputNumber style={{width : "120px"}} width="40px" min={1} max={10} defaultValue={3} onChange={onChange} />
//                                             <Select className="ml-12 h43" defaultValue="hours" style={{ width: "30%" }} onChange={handleChange}>
//                                                 <Option value="hours">Hours</Option>
//                                                 <Option value="minutes">Minutes</Option>
//                                                 <Option value="seconds">Seconds</Option>
//                                             </Select>
//                                             <span className="ml-20">Before the booked time</span>
//                                         </div>
//                                 </Form.Item>
        
//                                 <Form.Item label={<div className="mb-27">{props?.obj?.field2}</div>}>
//                                         <div className={styles['grid-setup']}>
//                                             <InputNumber style={{width : "120px"}} width="40px" min={1} max={10} defaultValue={3} onChange={onChange} />
//                                             <Select className="ml-12 h43" defaultValue="hours" style={{ width: "30%" }} onChange={handleChange}>
//                                                 <Option value="hours">Hours</Option>
//                                                 <Option value="minutes">Minutes</Option>
//                                                 <Option value="seconds">Seconds</Option>
//                                             </Select>
//                                             <span className="ml-20">Before the booked time</span>
//                                         </div>
//                                 </Form.Item>
                                
//                             </div>
//                         </Form.Item>
//                         <Form.Item className="mt-60">
//                             <div className="grid-view grid-3">
//                                 <Form.Item label={props?.obj?.field3}>
//                                     <div className={styles['grid-setup']}>
//                                         <Form.Item label={<span className="txt weight400">Fixed</span>} style={{width : "fit-content"}}>
//                                             <div className="flex center-content" style={{width : "fit-content"}}>
//                                                 <InputNumber style={{width : "100%"}} width="40px" min={1} max={10}
//                                                  formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
//                                                 //  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
//                                                  onChange={onChange} 
//                                                  />
//                                                 <span className="txt weight400 ml-15 mr-15">And</span>
//                                             </div>
//                                         </Form.Item>
//                                         <Form.Item label={<span className="txt weight400">Percentage</span>}>
//                                            <InputNumber style={{width : "120px"}} 
//                                            defaultValue={100}
//                                            min={0}
//                                            max={100}
//                                            formatter={value => `${value}%`}
//                                         //    parser={value => value.replace('%', '')}
//                                            onChange={onChange}
//                                            />
//                                         </Form.Item>
//                                     </div>
//                                 </Form.Item>
//                             </div>
//                         </Form.Item>
//                     </Form>
        
//                     <Divider className=""></Divider>
        
//                     <div className="gift-card-actions">
//                         <Button className="primary small mr-33" type="link"><span className="icon-wrap"><EditIcon /></span>Change Rescheduling Policy</Button>
//                     </div>

//                 </div>
//     )
// }
// export default HighSeasonPolicyCards;


import React, { useState } from 'react';
import { Switch, Form, Input, InputNumber, Select, Divider, Button } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Option } from 'rc-select';
import styles from '../../styles/components/Store-Policies.module.scss'
import EditIcon from '@material-ui/icons/Edit';
import cx from 'classnames';

const HighSeasonPolicyCards = (props : any) =>{

    const [freeReschedule, setFreeReschedule] = useState(false);
    const [paidReschedule, setPaidReschedule] = useState(false);

    let onSwitch = (event : any) => {

    }
    
    function onChange(value : any) {
        console.log('changed', value);
    }

    function handleChange(value : any) {
        console.log(`selected ${value}`);
    }

    /*
        title : "Rescheduling",
        field1 : "Allowed to Reschedule Until:",
        field2 : "Penalty if Rescheduled in less than:",
        field3 : "Penalty Fee",
    */

    return(
        <div className="card card2 pt-24 pl-34 pr-80 mb-25">
            <Form>
                <Form.Item className="">
                    <h6>{"Free Rescheduling"} 
                        <span className="ml-30">                      
                            <Switch
                            className="ml-0" size="small"
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            onChange={ (event) => setFreeReschedule(event) }
                            />
                        </span>
                    </h6>
                </Form.Item>

                {freeReschedule === true ?     
                    <Form.Item className="mt-25">
                        <div className={styles['grid-container']}>
                            <Form.Item label={<div className="mb-20">{props?.obj?.field1}</div>}>
                                    <div className={styles['grid-setup']}>
                                        <InputNumber style={{width : "120px"}} width="40px" min={1} max={10} defaultValue={3} onChange={onChange} />
                                        <Select className="ml-12 h43" defaultValue="hours" style={{ width: "30%" }} onChange={handleChange}>
                                            <Option value="hours">Hours</Option>
                                            <Option value="minutes">Minutes</Option>
                                            <Option value="seconds">Seconds</Option>
                                        </Select>
                                        <span className="ml-20">Before the booked time</span>
                                    </div>
                            </Form.Item>                        
                        </div>
                    </Form.Item>
        
                : 
                <>
                </>
                }

                <Form.Item className="mt-20">
                    <h6>{"Paid Rescheduling"} 
                        <span className="ml-30">                      
                            <Switch
                            className="ml-0" size="small"
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            onChange={ (event) => setPaidReschedule(event) }
                            />
                        </span>
                    </h6>
                </Form.Item>

                {paidReschedule === true ? 
                <Form.Item>          
                    <Form.Item className="mt-10" label={<div className="mt-25">{props?.obj?.field2}</div>}>
                            <div className={cx(styles['grid-setup'], 'mt-10') }>
                                <InputNumber style={{width : "120px"}} width="40px" min={1} max={10} defaultValue={3} onChange={onChange} />
                                <Select className="ml-12 h43" defaultValue="hours" style={{ width: "30%" }} onChange={handleChange}>
                                    <Option value="hours">Hours</Option>
                                    <Option value="minutes">Minutes</Option>
                                    <Option value="seconds">Seconds</Option>
                                </Select>
                                <span className="ml-20">Before the booked time</span>
                            </div>
                    </Form.Item>

                    <Form.Item className="mt-20">
                        <div className="grid-view grid-3">
                            <Form.Item label={props?.obj?.field3}>
                                <div className={styles['grid-setup']}>
                                    <Form.Item label={<span className="txt weight400">Fixed</span>} style={{width : "fit-content"}}>
                                        <div className="flex center-content" style={{width : "fit-content"}}>
                                            <InputNumber style={{width : "100%"}} width="40px" min={1} max={10}
                                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            //  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                                onChange={onChange} 
                                                />
                                            <span className="txt weight400 ml-15 mr-15">And</span>
                                        </div>
                                    </Form.Item>
                                    <Form.Item label={<span className="txt weight400">Percentage</span>}>
                                        <InputNumber style={{width : "120px"}} 
                                        defaultValue={100}
                                        min={0}
                                        max={100}
                                        formatter={value => `${value}%`}
                                    //    parser={value => value.replace('%', '')}
                                        onChange={onChange}
                                        />
                                    </Form.Item>
                                </div>
                            </Form.Item>
                        </div>
                    </Form.Item>
                </Form.Item>
                : 
                <>
                </>
                }

            </Form>

            <Divider className=""></Divider>

            <div className="gift-card-actions">
                <Button className="primary small mr-33" type="link"><span className="icon-wrap"><EditIcon /></span>Change Rescheduling Policy</Button>
            </div>
        </div>
    )
}
export default HighSeasonPolicyCards;