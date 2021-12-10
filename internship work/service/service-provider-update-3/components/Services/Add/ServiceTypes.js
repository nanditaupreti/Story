import React, { useState } from 'react';
import SelectableTags from '../../Common/SelectableTags';
import { Divider, Button, message } from 'antd';
import PropTypes from 'prop-types';

const ServiceTypes = ({onNext, selected}) => {
    const tags = [
        {
            id: 1,
            name: 'Dine-in',
            icon: 'room_service',
            selected: false
        },
        {
            id: 2,
            name: 'In Store',
            icon: 'local_florist',
            selected: false
        },
        {
            id: 3,
            name: 'House Visit',
            icon: 'local_pharmacy',
            selected: false
        },
        {
            name: 'Pick Up',
            id: 4,
            icon: 'bluetooth_drive',
            selected: false
        },
        {
            id: 5,
            name: 'Delivery',
            icon: 'local_bar',
            selected: false
        },
        {
            id: 6,
            name: 'Online',
            icon: 'fastfood',
            selected: false
        },
        {
            id: 7,
            name: 'By Phone',
            icon: 'directions_bike',
            selected: false
        },
        {
            id: 8,
            name: 'Meet at',
            icon: 'meeting_room',
            selected: false
        }
    ],

    onContinue = () => {
        let selected = tags.filter(tag => tag.selected);
        message.config({top: 60})
        if(selected.length) {
            onNext && onNext(selected);
        } else {
            message.error( 'Please select atleast one service type' );
        }
    };

    if(Array.isArray(selected) && selected.length) {
        selected.forEach(item => {
            const tag = tags.find(a => a.id === item.id);
            tag && (tag.selected = true);
        })
    }

    return (
        <div>
            <p><strong style={{ fontSize: '1.714rem' }}>Choose Service Types You Provide</strong></p>
            <div className="tags-wrap mt-55 mb-20">
                <SelectableTags multiSelect={ false } items={ tags } className="primary" />
            </div>
            <Divider />
            <Button className="primary pull-right" onClick={ onContinue }>Continue</Button>
        </div>
    )
}

ServiceTypes.propTypes = {
    onNext: PropTypes.func
}

export default ServiceTypes
