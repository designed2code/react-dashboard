import React from "react";
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    WechatOutlined,
} from '@ant-design/icons';
import FooterChatComponent from "./FooterChatComponent";
import { Drawer } from 'antd';
import ChatComponent from "./ChatComponent";
import DashboardLayout from "./DashboardLayout";
import SideLogoutComponent from './SideLogoutComponent';
import { useState } from "react";
const {Content, Sider } = Layout;

const LayoutCompoent = () => {
    const [collapsed,setCollapsed] = useState(true)
    const [visible,setVisible] = useState(false)

    const onCollapse = () => {
        setCollapsed(!collapsed)
    }

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    }
        return (
            <Layout className="main-layout-video-call-0440" style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Classes
                        </Menu.Item>
                        <Menu.Item key="3" onClick={showDrawer} icon={<WechatOutlined />}>
                            Chat
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Drawer title="CHAT" placement="right"
                    className="chat-drawer-box-interaction-0523"
                    width="380px"
                    footer={<FooterChatComponent />}
                    onClose={onClose}
                    visible={visible}>
                    <ChatComponent />
                </Drawer>
                <Layout className="site-layout">
                    <Content>
                        <DashboardLayout />
                    </Content>
                    <Sider className="right-side-bar-logout-component-4949" width="340">
                        <div className="custom-scrollbar-dashboard-0135">
                            <SideLogoutComponent />
                        </div>
                    </Sider>
                </Layout>
            </Layout>
        );
}

export default LayoutCompoent;