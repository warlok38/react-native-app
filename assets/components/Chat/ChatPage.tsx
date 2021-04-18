import React, { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import {
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChatMessageApiType } from '../../api/chat-api';
import images from '../../images';
import {
    sendMessage,
    startMessagesListening,
    stopMessagesListening,
} from '../../store/chat-reducer';
import { AppStateType } from '../../store/redux-store';
import { styles } from './style';

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

    const scrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const element = e.nativeEvent;

        if (
            Math.abs(
                element.contentSize.height -
                    element.contentOffset.y -
                    element.layoutMeasurement.height
            ) < 30
        ) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll(false);
        }
    };

    useEffect(() => {
        if (isAutoScroll) {
            messagesAncorRef.current?.scrollToEnd({ animated: true });
        }
    }, [messages]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            ref={messagesAncorRef}
            style={{
                height: 500,
                paddingLeft: 5,
                overflow: 'scroll',
                borderColor: '#797979',
                borderWidth: 2,
                borderRadius: 10,
            }}
            onScroll={scrollHandler}
        >
            {messages.map((message, index) => (
                <Message key={message.id} message={message} />
            ))}
        </ScrollView>
    );
};

const Message: React.FC<{ message: ChatMessageApiType }> = React.memo(
    ({ message }) => {
        return (
            <View
                style={{
                    paddingTop: 10,
                    paddingBottom: 5,
                }}
            >
                <View
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                    }}
                >
                    <View>
                        <Image
                            style={styles.userPhoto}
                            source={
                                message.photo
                                    ? { uri: message.photo }
                                    : images.unknownUser
                            }
                        />
                    </View>
                    <Text
                        style={{
                            paddingLeft: 5,
                            fontWeight: 'bold',
                        }}
                    >
                        {message.userName}
                    </Text>
                </View>
                <Text>{message.message}</Text>
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
            <View
                style={{
                    paddingHorizontal: 10,
                    borderColor: '#797979',
                    borderWidth: 2,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                }}
            >
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
                    disabled={status !== 'ready'}
                    onPress={sendMessageHandler}
                    style={
                        status !== 'ready'
                            ? {
                                  marginTop: 10,
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: 10,
                                  backgroundColor: '#bebebe',
                                  width: '100%',
                                  borderRadius: 10,
                              }
                            : {
                                  marginTop: 10,
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: 10,
                                  backgroundColor: '#fff',
                                  width: '100%',
                                  borderRadius: 10,
                              }
                    }
                >
                    <Text style={{ textTransform: 'uppercase' }}>
                        {status !== 'ready' ? 'Соединение...' : 'Отправить'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatPage;
