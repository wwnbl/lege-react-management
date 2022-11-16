import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('关于', '/about', <PieChartOutlined />),
    getItem('page 1', '/page1', <DesktopOutlined />),
    getItem('page 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const rootSubmenuKeys = ['sub1', 'sub2'];

const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const [openKeys, setOpenKeys] = useState(['']);
    const onOpenChange: MenuProps['onOpenChange'] = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
        console.log(keys)
    };
    const menuClick = (e: { key: string }) => {
        console.log('点击了', e.key);
        navigateTo(e.key)
    }

    return (
        <Menu theme="dark" defaultSelectedKeys={['/about']} mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={onOpenChange}
            openKeys={openKeys}
        />
    )
}

export default Comp