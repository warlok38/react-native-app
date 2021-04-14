import React, { useEffect, useRef, useState } from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChatMessageApiType } from '../../api/chat-api';
import {
    sendMessage,
    startMessagesListening,
    stopMessagesListening,
} from '../../store/chat-reducer';
import { AppStateType } from '../../store/redux-store';

const ChatPage: React.FC = () => {
    return <Chat />;
};

const Chat: React.FC = () => {
    const dispatch = useDispatch();
    const status = useSelector((state: AppStateType) => state.chat.status);

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        };
    }, []);

    return (
        <View>
            {status === 'error' && (
                <View>
                    <Text>Some error occured. Please refresh the page</Text>
                </View>
            )}
            <>
                <Messages />
                <AddMessageForm />
            </>
        </View>
    );
};

const Messages: React.FC<{}> = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);

    const messagesAncorRef = useRef<ScrollView>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true);

    const scrollHandler = (e: React.BaseSyntheticEvent) => {
        const element = e.currentTarget;
        if (
            Math.abs(
                element.scrollHeight - element.scrollTop - element.clientHeight
            ) < 50
        ) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll(false);
        }
    };

    useEffect(() => {
        // if (isAutoScroll) {
        //     messagesAncorRef.current?.scrollTo();
        // }
    }, [messages]);

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
                <Message key={message.id} message={message} />
            ))}
        </ScrollView>
    );
};

const Message: React.FC<{ message: ChatMessageApiType }> = React.memo(
    ({ message }) => {
        console.log(message ? '+' : '-');
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
    }
);

const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const status = useSelector((state: AppStateType) => state.chat.status);

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message));
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
                    <Text>send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatPage;
