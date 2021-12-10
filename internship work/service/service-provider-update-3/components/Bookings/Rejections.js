import React, {useState} from 'react'
import { Table, Button, Select, Menu, Input, Form, Modal, DatePicker, Rate } from 'antd';
import * as moment from 'moment';
import MapView from './MapView';
import cx from 'classnames';
import styles from './Style.module.scss';

const { Option } = Select;
const { RangePicker } = DatePicker;

const Rejections = () => {
    
    const categories = ['Categories', 'Category 1', 'Category 2'],
    subCategory = ['Sub Category', 'Sub Category 1', 'Sub Category 2', 'Sub Category 2'],
    // staff = ['Staff', 'Staff 1', 'Staff 2', 'Staff 3'],
    dataSource = [],
    columns = [
        {
            title: 'Booking ID',
            dataIndex: 'bookingId',
            key: 'bookingId',
        },
        {
            title: 'Service Name',
            dataIndex: 'service',
            key: 'service',
            render: function service(service) {
                return (
                    <>
                        <strong>{ service.name }</strong>
                        <br/>
                        <span className="tag dark4">{ service.type }</span>
                    </>
                )
            }
        },
        {
            title: 'Date & Time',
            dataIndex: 'date_time',
            key: 'date_time',
            render: function date_time(date_time) {
                return <p>{ moment(date_time).format(`${process.env.date_format} ${process.env.time_format}`) }</p>
            }
        },
        {
            title: 'Staff',
            dataIndex: 'staff',
            key: 'staff',
            render: function staff(staff) {
                return <p>{ staff.join(', ') }</p>
            }
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
            render: function customer(customer) {
                return (
                    <>
                        <span className="txt grey1">{ customer.name }</span>
                        <br/>
                        <Rate className="mr-5 fz-10 lh-15 auto-height custom-color txt" value={ 5 } /> <span className="fz-10 lh-15 pull left">({ customer.reviews })</span>
                        <br/>
                        <span className="material-icons mr-5 txt dark4">insert_drive_file</span>
                        <MapView />
                    </>
                )
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: function status(status) {
                return (
                    
                        <Button className={styles['btn-rejection']}>Rejected</Button>
                    
                )
            }
        },

    ]

    for(let i = 1; i<5; i++) {
        dataSource.push({
            key: i,
            bookingId: 'SP15912501(R1)',
            service: { name: 'Hair Cut', type: 'by Machine' },
            date_time: new Date(),
            staff: ['Chris J'],
            customer: {
                name: 'Ehnaan',
                rating: 5,
                reviews: 25,
                document: '',
                location: ''
            },
            email: 'Ehsaan@gmail.com',
            mobile: '+966-585-5592-56',
        })
    }

    return (
        <>
            <h5 className="mb-20">Rejections</h5>
            <Form className="stats-filter medium">
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={categories[0]}>
                        {categories.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={subCategory[0]}>
                        {subCategory.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                            ))}
                    </Select>
                </Form.Item>
                {/* <Form.Item className="auto-width">
                    <Select className="medium" defaultValue={staff[0]}>
                        {staff.map(option => (
                            <Option key={option} value={option}>{option}</Option>
                            ))}
                    </Select>
                </Form.Item> */}
                <Form.Item className="auto-width">
                    <div className={cx('picker',  `booking-picker`)}>
                        <RangePicker allowClear={false} separator={<span>to</span>} suffixIcon={false}></RangePicker>
                    </div>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="primary medium full-width">Apply Filters</Button>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="medium full-width">Clear Filters</Button>
                </Form.Item>
            </Form>

            <Table className="bordered mt-25" pagination={{ pageSize: 3 }} rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    }
                }} dataSource={dataSource} columns={columns} />
        </>
    )
}

export default Rejections
