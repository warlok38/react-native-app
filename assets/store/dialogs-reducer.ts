import { InferActionsTypes } from './redux-store';

type DialogType = {
    id: number;
    name: string;
};
type MessageType = {
    id: number;
    message: string;
};

const initialState = {
    dialogs: [
        { id: 1, name: 'Pepe' },
        { id: 2, name: 'Koko' },
        { id: 3, name: 'Puppa' },
        { id: 4, name: 'Luppa' },
        { id: 5, name: 'Zaza' },
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'whats up' },
        { id: 3, message: 'yoyoyo' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yhhahahaha' },
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

const dialogsReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case 'SN/dialogs/SEND-MESSAGE':
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
            };
        default:
            return state;
    }
};

export const actions = {
    sendMessage: (newMessageBody: string) =>
        ({
            type: 'SN/dialogs/SEND-MESSAGE',
            newMessageBody,
        } as const),
};

export default dialogsReducer;
