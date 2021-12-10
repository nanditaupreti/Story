import { Form, Input, Button, Radio, Checkbox, Select, Divider } from 'antd';
import React, { useState } from 'react';
import { RequiredMark } from 'antd/lib/form/Form';
import { Option } from 'antd/lib/mentions';

 
const Step1 = () => {

    let selectLanguage = [{id : 0, lang : "Hindi"},{id : 1, lang : "English"}];

    return ( 
        <>
        <div>
            <div className="content-wrapper table mb-56" style={{width : "95%"}}>
            <h4 className="center-text mb-26" style={{width : "fit-content"}}>Service Details</h4>

            <Form className="grid-view colgap-42 rowgap-24 mt-30" style={{gridTemplateColumns: "70% 35%"}} >
                <Form.Item label="Primary Language">
                        <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Search to Select"
                        optionFilterProp="children"

                        filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                    
                    {selectLanguage.map((obj) =>{
                            return(    
                                <Option key={`${obj.id}`} value={`${obj.id}`}>{obj.lang}</Option>
                            );

                    })}

                    </Select>
                    </Form.Item>

                <Form.Item className="mt-40" style={{width : "100%", height : "100%"}}>
                   <Button className="primary">Add New Menu</Button>
                </Form.Item>
            </Form>
          
            <Form className="grid-view grid-2 colgap-42 rowgap-24 mt-30">
                <Form.Item label="Primary Language">
                        <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Search to Select"
                        optionFilterProp="children"

                        filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                    
                    {selectLanguage.map((obj) =>{
                            return(    
                                <Option key={`${obj.id}`} value={`${obj.id}`}>{obj.lang}</Option>
                            );

                    })}
                    </Select>
                    </Form.Item>

                <Form.Item label="Secondary Language">
                        <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Search to Select"
                        // optionFilterProp="children"

                        filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                    
                    {selectLanguage.map((obj) =>{
                            return(    
                                <Option key={`${obj.id}`} value={`${obj.id}`}>{obj.lang}</Option>
                            );

                    })}
                    </Select>
                    </Form.Item>

                <Form.Item label="Item Name" style={{width  :"100%",gridTemplateColumns : "auto"}}>
                        <Input placeholder="A description goes here" width="80%" />
                </Form.Item>

                <Form.Item label="Item Name" style={{width  :"100%",gridTemplateColumns : "auto"}}>
                        <Input placeholder="A description goes here" width="80%" />
                </Form.Item>

                <Form className="grid-view colgap-42 rowgap-24 mt-30">
                    <Form.Item label="Description">
                        <Input placeholder="A description goes here" width="80%" />
                    </Form.Item>
                </Form>

            </Form>

            <Divider className="mt-30"></Divider>

            <Form className="grid-view colgap-42 rowgap-24 mt-30">
                    <Form.Item label="Description">
                        <Input placeholder="A description goes here" width="80%" />
                    </Form.Item>
                </Form>
        </div>
        </div>
    </>
     );
}
 
export default Step1;