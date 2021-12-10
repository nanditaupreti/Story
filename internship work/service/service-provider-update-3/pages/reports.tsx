import React, {useState} from 'react'
import { Table, Button, Select, Tooltip, Switch, Form, Modal, DatePicker, Rate, Image } from 'antd';
import moment from 'moment';
import cx from 'classnames';
import Layout from '../components/User/Layout';
const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Reports() {
    
    const categories = ['Categories', 'Category 1', 'Category 2'],
    subCategory = ['Sub Category', 'Sub Category 1', 'Sub Category 2', 'Sub Category 2'],
    staff = ['Staff', 'Staff 1', 'Staff 2', 'Staff 3'],
    dataSource = [],
    columns = [
        {
            title: 'DATE',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'TOTAL Bookings',
            dataIndex: 'totalbookings',
            key: 'totalbookings',
            render: function totalbookings(totalbookings : any) {
                return (
                    <>
                        <span className="tag dark4">{ totalbookings }</span>
                    </>
                )
            }
        },
        {
            title: 'ACCEPTED',
            dataIndex: 'accepted',
            key: 'accepted',
            render: function accepted(accepted : any) {
                return <p>{accepted}</p>
            }
        },
        {
            title: 'completed',
            dataIndex: 'completed',
            key: 'completed',
            render: function completed(completed : any) {
                return <span className="txt success">{completed}</span>
            }
        },
        {
            title: 'Rejected',
            dataIndex: 'rejected',
            key: 'rejected',
            render: function rejected(rejected : any) {
                return (
                    <>
                        <span className="txt danger">{ rejected }</span>
                    </>
                )
            }
        },
        {
            title: 'Auto Rejected',
            dataIndex: 'autorejected',
            key: 'autorejected',
            render: function autorejected(autorejected : any) {
                return (
                    <>
                        <span className="txt danger">{ autorejected }</span>
                    </>
                )
            }
        },
        {
            title: 'NO SHOW',
            dataIndex: 'noshow',
            key: 'noshow',
            render: function noshow(noshow : any) {
                return <span>{ noshow }</span>
            }
        },
        {
            title: 'CANCELLED',
            dataIndex: 'cancelled',
            key: 'cancelled',
            render: function cancelled(cancelled : any) {
                return <span className="txt">{ cancelled }</span>
            }
        },
        {
            title: 'SP+ FEE',
            dataIndex: 'spfee',
            key: 'spfee',
            render: function spfee(spfee : any) {
                return (
                        <div>
                            <span>{ spfee }</span>
                       </div>
                ) 
            }
        },
        {
            title: 'REVENUE',
            dataIndex: 'revenue',
            key: 'revenue',
            render: function revenue(revenue : any) {
                return (
                        <div>
                            <span className="txt success">{ revenue }</span>
                       </div>
                ) 
            }
        },

    ]

    for(let i = 1; i<3; i++) {
        dataSource.push({
            key: i,
            date: '14 Nov,2020',
            totalbookings: '104',
            accepted: '104',
            completed: '104',
            rejected : '104',
            autorejected : '104',
            noshow:  '0',
            cancelled: '0',
            spfee: '$200.00',
            revenue: '$2000.0',
        })
    }


    
    return (
        <Layout>
                <div>
                <h3 className="mb-23">Store Reports</h3>
                <h5 className="mb-24">Booking Statistics</h5>
                <Form className="stats-filter medium">
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

                <div className="pull-right auto-width txt icon1">
                    <Image height={20} width={20} src="./excel.png"></Image>
                    <span className="fz-12 lh-22 pull left txt dark2 ml-7">Export Report</span>
                </div>

                <Table className="bordered mt-25" rowSelection={{
                        type: 'checkbox',
                        onChange: (selectedRowKeys, selectedRows) => {
                            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                        }
                    }} dataSource={dataSource} columns={columns} />
            </div>
        </Layout>
    )
}