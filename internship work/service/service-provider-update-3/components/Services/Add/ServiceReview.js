import React from 'react'
import PropTypes from 'prop-types';
import styles from './Style.module.scss';
import { Avatar, Button } from 'antd';

const ServiceReview = ({onSaveAndAddNew, onSaveAndPublish, onPrevious}) => {
    const serviceData = [
        {
            name: 'Service Name',
            value: 'Hair Cut'
        },
        {
            name: 'Service Category',
            value: 'Beauty Shop'
        },
        {
            name: 'Service Sub-Category',
            value: 'Beauty Salon'
        },
        {
            name: 'Service Type',
            value: 'In-store'
        },
        {
            name: 'Duration',
            value: '01 Hours 30 Minutes'
        },
        {
            name: 'Allowed To Book Time',
            value: 'Within 30 Minutes'
        },
        {
            name: 'Description',
            value: 'A Description goes here for the relevant service....'
        },
        {
            name: 'Product Images',
            value: <>
                <Avatar className="mr-10" shape="square" size="large" />
                <Avatar className="mr-10" shape="square" size="large" />
                <Avatar className="mr-10" shape="square" size="large" />
                <Avatar className="mr-10" shape="square" size="large" />
            </>
        },
    ],
    
    onContinue = () => {
        // let selected = tags.filter(tag => tag.selected);
        message.config({top: 60});
        // if(selected.length) {000000000000x
            onNext && onNext();
        // } else {
            // message.error( 'Please select atleast one service type' );
        // }

    },

    onBack = () => {
        onPrevious && onPrevious();
    };
    
    return (<div>
        <div className="card">
            <h5 className="mb-70">Review Your Service Listing</h5>
            { serviceData.map((row, i) => (
                <div className={ `${styles['service-meta']} grid-view grid-2 fz-16` } key={i}>
                    <span>{ row.name }</span>
                    <strong>{ row.value }</strong>
                </div>
            )) }
        </div>
        <div className="mt-50">
            <Button className="dark pull-left" onClick={ onBack }><span className="material-icons mr-10">west</span>Edit Sections</Button>
            <Button className="primary pull-right" onClick={ onSaveAndPublish }>Save &amp; Publish<span className="material-icons ml-10">east</span></Button>
            <Button className="pull-right mr-20" onClick={ onSaveAndAddNew }><span className="material-icons mr-10">add</span>Save &amp; Add More</Button>
        </div>
    </div>)
}

ServiceReview.propTypes = {
    onSaveAndAddNew: PropTypes.func,
    onSaveAndPublish: PropTypes.func,
    onPrevious: PropTypes.func,
}

export default ServiceReview
