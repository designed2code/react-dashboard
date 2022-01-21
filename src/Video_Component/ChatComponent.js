import React from "react";
import { Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Text } = Typography;

const ChatComponent = () => {

        return (
            <div className="chat-section-main-layout-1253F">
                <div className="flex-start">
                    <Avatar icon={<UserOutlined />} />
                    <Text className="agent-chat-text-0103">Hello
                        <Text className="current-time-chat-0226" italic>02:26 PM</Text>
                    </Text>
                </div>
                <div className="flex-end">
                    <Text className="customer-chat-text-0103">How are you
                        <Text className="current-time-chat-0226" italic>02:28 PM</Text>
                    </Text>
                    <Avatar icon={<UserOutlined />} />
                </div>
                <div className="flex-start">
                    <Avatar icon={<UserOutlined />} />
                    <Text className="agent-chat-text-0103">Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes
                        <Text className="current-time-chat-0226" italic>02:29 PM</Text>
                    </Text>
                </div>
                <div className="flex-end">
                    <Text className="customer-chat-text-0103">character, or group. Description
                        <Text className="current-time-chat-0226" italic>02:31 PM</Text>
                    </Text>
                    <Avatar icon={<UserOutlined />} />
                </div>
            </div>
        )
}

export default ChatComponent;