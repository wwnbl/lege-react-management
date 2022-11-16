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

const items: MenuItem[] = [
    {label:'关于', key:'/about', icon:<PieChartOutlined />},
    {label:'page 1',key: '/page1',icon: <DesktopOutlined />},
    {label:'page 2', key:'/page2',icon:  <DesktopOutlined /> },
    {label:'User', key:'/sub1', icon:<UserOutlined />,children:[
        {label:'Tom', key:'3'},
        {label:'Bill', key:'4'},
        {label:'Alex', key:'5'}
        ]
    },
    {label:'Team', key:'/sub2', icon:<TeamOutlined />,children:[
        {label:'Team 1', key:'6'},
        {label:'Team 2', key:'8'}
        ]
    },
    {label:'Files', key:'9', icon:<FileOutlined />},
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