import React from 'react';
import SelectableTags from '../../Common/SelectableTags';
import { Divider, Button, message } from 'antd';
import PropTypes from 'prop-types';

const SubCategories = ({onNext, onPrevious, selected}) => {
    let tags = [
        {
            id: 1,
            name: 'Beauty Salon',
            selected: false
        },
        {
            id: 2,
            name: 'Barbershop',
            selected: false
        },
        {
            id: 3,
            name: 'Bodycare',
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
            <p><strong style={{ fontSize: '1.714rem' }}>Choose Your Sub Category</strong></p>
            <div className="tags-wrap mt-55 mb-20">
                <SelectableTags multiSelect={ true } items={tags} className="primary" />
            </div>
            <Divider />
            <Button className="dark pull-left" onClick={ onBack }><span className="material-icons mr-10">west</span> Service Category</Button>
            <Button className="primary pull-right" onClick={ onContinue }>Save &amp; Continue<span className="material-icons ml-10">east</span></Button>
        </div>
    )
}

SubCategories.propTypes = {
    onNext: PropTypes.func,
    onPrevious: PropTypes.func,
}

export default SubCategories
