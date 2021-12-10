import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import { UserOutlined, UpCircleOutlined, TranslationOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector, useDispatch } from 'react-redux';
import router from "next/router";
import Link from 'next/link';
import { authenticate } from '../../actions/user';
import React, { useEffect, useRef, useState } from "react";
import { SettingsOutlined } from "@material-ui/icons";
import cx from "classnames";

const { SubMenu } = Menu;

const Header = ({ user, accessToken }) => {
    const dispatch = useDispatch();
    const [auth_button, setLogout] = useState(false);

    const languagesArray = [
        {id : 1, lang : "English"},
        {id : 2, lang : "Arabic"},
        // {id : 3, lang : "French"},
        // {id : 4, lang : "German"},
        // {id : 5, lang : "English"},
        // {id : 6, lang : "English"},
        // {id : 7, lang : "English"},
        // {id : 8, lang : "English"},
    ]
    
    useEffect(() => {
        const logout = () => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('user')
            router.push( process.env.base_url );
        };
        if(localStorage.getItem('accessToken')) {
            setLogout(<Menu.Item key="setting-1" onClick={ logout }>Logout</Menu.Item>);
        } else {
            router.push( process.env.base_url );
        }
    }, []);

    return (
        <header className="user-header">
            <Input className="header-search" size="small" placeholder="Search" prefix={<SearchOutlined />} />
            <div className="heder-actions">
                <div></div>
                    <div className={cx('langmenu', '_header')}>
                        <Menu mode="horizontal" className="user-actions transparent-bg">
                            <SubMenu key="SubMenu"  icon={<TranslationOutlined size={22}></TranslationOutlined>} title="Arabic" >
                                {languagesArray.map((langObj) =>{
                                    return(
                                        <Menu.Item key={`setting:${langObj.id}`}>{langObj.lang}</Menu.Item>
                                    )
                                })}
                            </SubMenu>
                        </Menu>
                    </div>

               
                <span>
                    <Link href="/notifications" passHref={true}>
                        <NotificationsIcon style={{cursor : "pointer"}} />
                    </Link>
                </span>
                
                <span>
                    <Link href="/settings" passHref={true}>
                            <SettingsIcon style={{cursor : "pointer"}} />
                    </Link>
                </span>
                <div>
                    <Menu mode="horizontal" className="user-actions transparent-bg">
                        <SubMenu key="SubMenu" icon={<Avatar className="mr-5" size={22} icon={<UserOutlined />} />} title="Halais">
                            { auth_button }
                        </SubMenu>
                    </Menu>
                </div>

            </div>
        </header>
    )
}

Header.getInitialProps = async () => {
    const userData = localStorage.getItem('user');
    const accessToken = localStorage.getItem('accessToken');
    return { user: userData, accessToken: accessToken }
}

export default Header
