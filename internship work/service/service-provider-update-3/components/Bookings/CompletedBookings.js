import React, {useState} from 'react'
import { Table, Button, Select, Tooltip, Switch, Form, Modal, DatePicker, Rate } from 'antd';
import * as moment from 'moment';
import MapView from './MapView';
import cx from 'classnames';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import events from '../../public/events';

const localizer = momentLocalizer(moment)

const { Option } = Select;
const { RangePicker } = DatePicker;

const CompletedBookings = () => {
    
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
                        <Rate className="mr-5 auto-height fz-10 lh-15 custom-color txt" value={ 5 } /> <span className="fz-10 lh-15 pull left">({ customer.reviews })</span>
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
            title: 'SP+ Fee',
            dataIndex: 'fee',
            key: 'fee',
            render: function fee(fee) {
                return <span className="txt danger">{ process.env.currency } { fee }</span>
            }
        },
        {
            title: 'Revenue',
            dataIndex: 'revenue',
            key: 'revenue',
            render: function revenue(revenue) {
                return <span className="txt success">{ process.env.currency } { revenue }</span>
            }
        },
        {
            title: 'Ratings',
            dataIndex: 'ratings',
            key: 'ratings',
            render: function ratings(ratings) {
                return <div className="user-ratings multi">
                    { ratings.map(user_rating => (
                        <div key={user_rating.id}>
                            <Tooltip placement="bottom" title={ user_rating.comment }>
                            <span>{ user_rating.name }</span>
                            <br />
                                <Rate className="mr-10 small" value={ user_rating.rating } />
                            </Tooltip>
                        </div>
                    ))}
                </div> 
            }
        },

    ]

    for(let i = 1; i<20; i++) {
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
            fee: '5',
            revenue: '35',
            ratings: [
                {
                    id: 1,
                    name: 'Ehsaan',
                    rating: 5,
                    comment: 'Great experience with Halais, this is my first order and loved it.'
                },
                {
                    id: 2,
                    name: 'Yours',
                    rating: 5,
                    comment: 'Great experience with Ehsaan, this is my first service and loved it.'
                }
            ]
        })
    }


    const onCalendarSwitch = (checked, evt) => {
        toggleContent(checked ? <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            className="mt-20"
            style={{ height: 500 }}
            views={['month', 'week', 'day']}
            /> : defaultContent);
    }
    
    const defaultContent = <Table className="bordered mt-25" rowSelection={{
        type: 'checkbox',
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        }
    }} dataSource={dataSource} columns={columns} />;

    const [content, toggleContent] = useState(defaultContent);
    
    return (
        <div>
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

            <div className="pull-right auto-width txt icon1" style={{ minWidth: '150px' }}>
                <span className="material-icons fz-22 mr-5 lh-22 pull left">picture_in_picture</span>
                <span className="fz-12 lh-22 pull left">Calendar View</span>
                <Switch className="default mt-4 ml-15 pull left" size="small" onChange={ onCalendarSwitch } />
            </div>

            { content }
        </div>
    )
}

export default CompletedBookings
