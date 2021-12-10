import { Tabs, Input, Button, Switch, Divider } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../components/User/Layout';
import DatesCard from '../components/Store-Policies/dates-card';
import MyPolicies from '../components/Store-Policies/high-season-policy';
import MyPolicyCard from '../components/Store-Policies/my-policy-card';
import HighSeasonPolicyCards from '../components/Store-Policies/high-season-policy';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';


const { TabPane } = Tabs;
const { TextArea } = Input;

const StorePolicies = () =>{
 
    let regularSeasonPolicyCards = [
        {
        title : "Rescheduling",
        field1 : "Allowed to Reschedule Until:",
        field2 : "Penalty if Rescheduled in less than:",
        field3 : "Penalty Fee",
    },
        {
        title : "Cancellation",
        field1 : "Allowed to Cancel Until",
        field2 : "Penalty if Cancelled in less than",
        field3 : "Cancellation Penalty Fee",
    }

]
    let highSeasonPolicyCards = [
        {
        title : "Rescheduling",
        field1 : "Allowed to Reschedule Until:",
        field2 : "Penalty if Rescheduled in less than:",
        field3 : "Penalty Fee",
    },
        {
        title : "Cancellation",
        field1 : "Allowed to Cancel Until",
        field2 : "Penalty if Cancelled in less than",
        field3 : "Cancellation Penalty Fee",
    }

]


const [Reschedule, setReschedule] = useState(false);
const [cancellation, setCancellation] = useState(false);

    return(
        <Layout>
            <div className="">
                <h3 className="mb-24">Store Policies</h3>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Regular Seasons Policy" key="1">
                            <h4 className="mb-37">My Policies</h4>

                                <div className="card card2 mb-20">
                                    <h5 className="mb-20">{"Rescheduling"} 
                                        <span className="ml-30">                      
                                            <Switch
                                            className="ml-0" size="small"
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                            onChange={ (event) => setReschedule(event)}
                                            />
                                        </span>
                                    </h5>
                                    {Reschedule === true ? 
                                        <div>
                                            <MyPolicyCard obj={regularSeasonPolicyCards[0]}></MyPolicyCard>
                                        </div>
                                    : 
                                    <>
                                    </>
                                    }
                                </div> 

                    <div className="card card2 mb-20">
                                <h5 className="mb-20">{"Cancellation"} 
                                    <span className="ml-30">                      
                                        <Switch
                                        className="ml-0" size="small"
                                        checkedChildren={<CheckOutlined />}
                                        unCheckedChildren={<CloseOutlined />}
                                        onChange={ (event) => setCancellation(event) }
                                        />
                                    </span>
                                </h5>
            
                        {/* <Divider className="mb-13"></Divider> */}

                        {cancellation === true ? 
                            <div className="">
                                <MyPolicyCard obj={regularSeasonPolicyCards[1]}></MyPolicyCard>
                            </div>    
                        : 
                        <>
                        </>
                        }
        
                    </div>
  

                        <div className="card card2 pt-20 pb-20 pl-20 pr-20">
                            <TextArea rows={7} showCount={true}/>
                        </div>
                        <div className="mt-41">
                            <Button className="primary txt pull-right">Update Policy</Button>
                        </div>
                    </TabPane>
                    
                    <TabPane tab="High Season Policy" key="2">
                        <h4 className="mb-37">High Season Policy</h4>
                        <DatesCard />
                        <div className="card card2 mb-20">
                                    <h5 className="mb-20">{"Rescheduling"} 
                                        <span className="ml-30">                      
                                            <Switch
                                            className="ml-0" size="small"
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                            onChange={ (event) => setReschedule(event)}
                                            />
                                        </span>
                                    </h5>
                                    {Reschedule === true ? 
                                        <div>
                                            <MyPolicyCard obj={regularSeasonPolicyCards[0]}></MyPolicyCard>
                                        </div>
                                    : 
                                    <>
                                    </>
                                    }
                                </div> 

                    <div className="card card2 mb-20">
                                <h5 className="mb-20">{"Cancellation"} 
                                    <span className="ml-30">                      
                                        <Switch
                                        className="ml-0" size="small"
                                        checkedChildren={<CheckOutlined />}
                                        unCheckedChildren={<CloseOutlined />}
                                        onChange={ (event) => setCancellation(event) }
                                        />
                                    </span>
                                </h5>
            
                        {/* <Divider className="mb-13"></Divider> */}

                        {cancellation === true ? 
                            <div className="">
                                <MyPolicyCard obj={regularSeasonPolicyCards[1]}></MyPolicyCard>
                            </div>    
                        : 
                        <>
                        </>
                        }
        
                    </div>
                    </TabPane>
                </Tabs>
            </div>    
        </Layout>
    
    )
}
export default StorePolicies;

