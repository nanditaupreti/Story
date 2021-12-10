import { Layout, Menu } from "antd";
import Image from 'next/image'
import { useRouter } from 'next/router';
import cx from 'classnames';

const { Sider } = Layout;

const LeftSidebar = (props) => {
    const router = useRouter();
    const handleClick = (e) => router.push(e.key),

    checkClass = (e) => {
        return e.pathArr.includes(router.route);
    }

    return (
        <div className="left-sidebar">
            <div className="logo">
                <Image width={174} height={30} src="/full-logo.svg" alt="logo" />
            </div>
            <Menu mode="inline" defaultSelectedKeys={router.pathname}>
                {
                    props.menu_items.map((menu, i) => <Menu.Item className={ cx({'ant-menu-item-selected': checkClass(menu) }) } key={menu.path} onClick={ handleClick } icon={ menu.icon ? (typeof menu.icon == 'string' ? <span className="material-icons fz-20">{ menu.icon }</span> : menu.icon) : null}>{ menu.label }</Menu.Item>)
                }
            </Menu>
        </div>
    )
}

export default LeftSidebar
