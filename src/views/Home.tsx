import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from "react-router-dom"

import MainMenu from "@/components/MainMenu"

const { Header, Content, Footer, Sider } = Layout;
const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                <MainMenu/>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: '16px' }} >
                    <Breadcrumb style={{ lineHeight: '64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0 0' }} className="site-layout-background">

                    {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
                    </div> */}
                    <Outlet></Outlet>
                </Content>
                <Footer style={{ textAlign: 'center', lineHeight: '48px', padding: 0 }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;