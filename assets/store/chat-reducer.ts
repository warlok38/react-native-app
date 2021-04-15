import { FormAction } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { chatAPI, ChatMessageApiType, StatusType } from '../api/chat-api';
import { Dispatch } from 'redux';
import uuid from 'react-native-uuid';

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
type ChatMessageType = ChatMessageApiType & { id: string };

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType,
};

const chatReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEVIED':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    ...action.payload.messages.map((m) => ({
                        ...m,
                        id: uuid.v4() as string,
                    })),
                ].filter((m, index, array) => index >= array.length - 100),
            };
        case 'SN/chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status,
            };

        default:
            return state;
    }
};

export const actions = {
    messageReceived: (messages: ChatMessageApiType[]) =>
        ({
            type: 'SN/chat/MESSAGES_RECEVIED',
            payload: { messages },
        } as const),
    statusChanged: (status: StatusType) =>
        ({
            type: 'SN/chat/STATUS_CHANGED',
            payload: { status },
        } as const),
};

let _newMessageHandler:
    | ((messages: ChatMessageApiType[]) => void)
    | null = null;
const newMessagehandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messageReceived(messages));
        };
    }
    return _newMessageHandler;
};

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status));
        };
    }
    return _statusChangedHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe('messages-received', newMessagehandlerCreator(dispatch));
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.subscribe('messages-received', newMessagehandlerCreator(dispatch));
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
    chatAPI.stop();
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
};

export default chatReducer;
