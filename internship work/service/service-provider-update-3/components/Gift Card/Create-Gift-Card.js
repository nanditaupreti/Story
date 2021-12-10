import {Form} from 'antd';
import React from 'react';
import CreateGiftStep1 from './CreateGiftStep1';
import CreateGiftStep2 from './CreateGiftStep2';

const CreateGiftCard = () => {
    return ( 
        <Form className="ml-20 mr-20">
            <Form.Item>
                <CreateGiftStep1></CreateGiftStep1>
            </Form.Item>

            <Form.Item>
                <CreateGiftStep2></CreateGiftStep2>
            </Form.Item>
        </Form>
     );
}
 
export default CreateGiftCard;