import React from 'react'
import { useRouter } from 'next/router';
import UserLayout from '../../components/User/Layout';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import events from '../../public/events';
import { useState } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Tabs, Button } from 'antd';

const localizer = momentLocalizer(moment)

const Schedular = () => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState({title: ''});

    const handleOk = () => {
        // console.log('ok clicked', evt);
    }

    const handleCancel = () => {
        // setCreateGiftCard(false);
        // setReactivateCard(false);
        setModal(false);
    }
    
    return (
        <UserLayout>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={['month', 'week', 'day']}
                />

            {/* <Modal title="Edit Event" visible={modal} onOk={handleOk} onCancel={handleCancel}>
                { modalContent?.title }
            </Modal> */}
        </UserLayout>
    )
}



export default Schedular
