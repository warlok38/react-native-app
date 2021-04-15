import React, { useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const wsChannel = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
);

export type ChatMessageType = {
    message: string;
    photo: string;
    userId: number;
    userName: string;
};

const ChatPage: React.FC = () => {
    return <Chat />;
};

const Chat: React.FC = () => {
    return (
        <View>
            <Messages />
            <AddMessageForm />
        </View>
    );
};

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    if (wsChannel !== null) {
        wsChannel.onopen = (ev) => {
            console.log(ev);
        };
    }

    useEffect(() => {
        wsChannel.addEventListener('message', (ev: MessageEvent) => {
            console.log('1sdsd1');
            const newMessages = JSON.parse(ev.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        });
    }, []);
    return (
        <ScrollView
            // ref={messagesAncorRef}
            style={{
                height: 400,
                overflow: 'scroll',
                borderColor: '#797979',
                borderWidth: 2,
            }}
            // onScroll={scrollHandler}
        >
            {messages.map((message, index) => (
                <Message key={index} message={message} />
            ))}
        </ScrollView>
    );
};

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Image
                width={30}
                height={30}
                source={{
                    uri: message.photo
                        ? message.photo
                        : 'https://via.placeholder.com/30',
                }}
            />
            <Text>{message.userName}</Text>
            <br />
            <Text>{message.message}</Text>
            <hr />
        </View>
    );
};

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('');
    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        wsChannel.send(message);
        setMessage('');
    };
    return (
        <View style={{ marginTop: 10 }}>
            <View style={{ borderColor: '#797979', borderWidth: 2 }}>
                <TextInput
                    placeholder="Введите сообщение..."
                    multiline
                    numberOfLines={3}
                    onChangeText={(text) => setMessage(text)}
                    value={message}
                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={sendMessageHandler}
                    style={{
                        marginTop: 10,
                        display: 'flex',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 10,
                    }}
                >
                    <Text>send (temp)</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatPage;
