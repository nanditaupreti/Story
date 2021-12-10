import React from 'react';
import { Switch, Form, Input, InputNumber, Select, Divider, Button, DatePicker } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Option } from 'rc-select';
import styles from '../../styles/components/Store-Policies.module.scss'
import EditIcon from '@material-ui/icons/Edit';
import cx from 'classnames';

const { RangePicker } = DatePicker;

const DatesCard = (props : any) =>{

    return(
        <div className="card card2 pt-24 pl-34 pr-80 mb-50">
            <h5>Dates</h5>
            <Divider className="mb-36"></Divider>
            <div className={styles['date-container']}>
                <div className={cx('picker',  `date-picker`)}>
                    <RangePicker allowClear={false} separator={<span>to</span>} suffixIcon={false}></RangePicker>
                </div>
                <div className={styles['add-more']}>
                    <span className="txt primary weight700"><u>Add More</u></span>
                </div>
            </div>
        </div>
    )
}
export default DatesCard;