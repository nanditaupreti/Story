import React from 'react';
import SelectableTags from '../../Common/SelectableTags';
import { Divider, Button, message } from 'antd';
import PropTypes from 'prop-types';

const Categories = ({onNext, onPrevious, selected}) => {
    let tags = [
        {
            id: 1,
            name: 'Restaurant',
            icon: 'restaurant',
            selected: false
        },
        {
            id: 2,
            name: 'Clinics',
            icon: 'local_hospital',
            selected: false
        },
        {
            id: 3,
            name: 'Driving Training',
            icon: 'directions_car_filled',
            selected: false
        },
        {
            id: 4,
            name: 'Beverages',
            icon: 'free_breakfast',
            selected: false
        },
        {
            id: 5,
            name: 'Beauty Shops',
            icon: 'local_florist',
            selected: false
        },
        {
            id: 6,
            name: 'Bakery & Desserts',
            icon: 'bakery_dining',
            selected: false
        },
        {
            id: 7,
            name: 'Sports Clubs',
            icon: 'directions_bike',
            selected: false
        },
        {
            id: 8,
            name: 'Venues',
            icon: 'meeting_room',
            selected: false
        },
        {
            id: 9,
            name: 'Gift Shops',
            icon: 'card_giftcard',
            selected: false
        },
    ],

    onContinue = () => {
        let selected = tags.filter(tag => tag.selected);
        message.config({top: 60})
        if(selected.length) {
            onNext && onNext(selected);
        } else {
            message.error( 'Please select atleast one service type' );
        }

    },

    onBack = () => {
        onPrevious && onPrevious();
    }

    if(Array.isArray(selected) && selected.length) {
        selected.forEach(item => {
            const tag = tags.find(a => a.id === item.id);
            tag && (tag.selected = true);
        })
    }

    return (
        <div>
            <p><strong style={{ fontSize: '1.714rem' }}>Choose Your Service Category</strong></p>
            <div className="tags-wrap mt-55 mb-20">
                <SelectableTags multiSelect={ true } items={tags} className="primary" />
            </div>
            <Divider />
            <Button className="dark pull-left" onClick={ onBack }><span className="material-icons mr-10">west</span>Service Type</Button>
            <Button className="primary pull-right" onClick={ onContinue }>Save &amp; Continue<span className="material-icons ml-10">east</span></Button>
        </div>
    )
}

Categories.propTypes = {
    onNext: PropTypes.func,
    onPrevious: PropTypes.func,
}

export default Categories
