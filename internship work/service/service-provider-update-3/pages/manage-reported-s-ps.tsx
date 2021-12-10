import React from 'react';
import AdminLayout from '../components/Admin/Layout';
import { Rate, Table, Menu, Tooltip } from 'antd'
import moment from 'moment';
import styles from '../styles/components/manage-reported-s-ps.module.scss'

const ManageReportedSps = () =>{
    
    const dataSource = [],
    columns = [
        {
            title: 'SP Name',
            dataIndex: 'spname',
            key: 'spname',
            render: function spname(spname : any) {
                return (
                    <>
                        <span><strong>{ spname.name }</strong><span> { spname.at }</span></span>
                    </>
                )
            }
        },
        {
            title: 'Date & Time',
            dataIndex: 'date_time',
            key: 'date_time',
            render: function date_time(date_time : any) {
                return <p>{ moment(date_time).format(`${process.env.date_format} ${process.env.time_format}`) }</p>
            }
        },
        {
            title: 'Reported By',
            dataIndex: 'reportedby',
            key: 'reportedby',
            render: function reportedby(reportedby : any) {
                return(
                    <div className={styles['reported-sps']}>
                        <div className={styles['reported-container']}>{ reportedby }<span className="material-icons">north_east</span></div>
                    </div>
                ) 
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
            render: function remarks(remarks : any) {
                return <p>{remarks}</p>
            }
        },
        {
            title: 'actions',
            dataIndex: 'actions',
            key: 'actions',
            render: function action() {
                return <>
                    <Menu className="table-action-btn" mode="horizontal">
                        <Menu.SubMenu key="SubMenu" title="">
                            <Menu.Item key="Accept" className="txt primary" icon={<span className="material-icons">chat_bubble</span>}>Message</Menu.Item>
                            <Menu.Item key="Reject" className="txt secondary"  icon={<span className="material-icons">do_not_disturb_alt</span>}>Deactivate</Menu.Item>
                            <Menu.Item key="Reject" className="txt danger"  icon={<span className="material-icons">delete</span>}>Close Account</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </>
            }
        },

    ]

    for(let i = 1; i<3; i++) {
        dataSource.push({
            key: i,
            spname: { name : "Halais", at : "@halais123", service: 'Hair Cut ', type: 'by Machine' },
            date_time: new Date(),
            email: 'Ehsaan@gmail.com',
            reportedby : 'Ehsan',
            remarks : 'Not being good at service.'
        })
    }



    return(
        <AdminLayout>
            <h3 className="mb-41">Manage Reported SP’s</h3>
            <div>
                <Table className="bordered mt-25" rowSelection={{
                        type: 'checkbox',
                        onChange: (selectedRowKeys, selectedRows) => {
                            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                        }
                    }} dataSource={dataSource} columns={columns} />
            </div>
        </AdminLayout>
    )
}

export default ManageReportedSps;