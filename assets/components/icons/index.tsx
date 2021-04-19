import React from 'react';
import { StyleProp } from 'react-native';
import Svg from 'react-native-svg';
import * as Icons from './icons';

const conformity = {
    profile: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.Profile {...props} />,
    },
    error: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.Error {...props} />,
    },
    arrowDown: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.ArrowDown {...props} />,
    },
    arrowUp: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.ArrowUp {...props} />,
    },
    logout: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.Logout {...props} />,
    },
    login: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.Login {...props} />,
    },
    users: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.Users {...props} />,
    },
    userRemove: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.UserRemove {...props} />,
    },
    userAdd: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.UserAdd {...props} />,
    },
    chat: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.Chat {...props} />,
    },
    message: {
        viewBox: '0 0 24 24',
        component: (props: IconTypes) => <Icons.Message {...props} />,
    },
};

type IconTypes = {
    name: keyof typeof conformity;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
};

export const Icon: React.FC<IconTypes> = ({
    name,
    width = 20,
    height = 20,
    fill = 'black',
    stroke,
    ...args
}) => {
    let svgObj = conformity[name];
    if (!svgObj || !svgObj.component || !svgObj.viewBox) {
        svgObj = conformity['profile'];
    }
    const { component: Path, viewBox } = svgObj;
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            viewBox={viewBox}
            {...args}
        >
            <Path fill={fill} stroke={stroke} name={name} />
        </Svg>
    );
};
