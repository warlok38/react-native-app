import React from 'react';
import Svg, { Path } from 'react-native-svg';

type IconType = {
    fill?: string;
    stroke?: string;
};

export const Profile: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
            fill={fill}
        />
    </Svg>
);

export const Error: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"
            fill={fill}
        />
    </Svg>
);

export const ArrowDown: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z"
            fill={fill}
        />
    </Svg>
);

export const ArrowUp: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
            fill={fill}
        />
    </Svg>
);

export const Message: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
            fill={fill}
        />
    </Svg>
);

export const Chat: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"
            fill={fill}
        />
    </Svg>
);

export const UserAdd: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12C11.21 12 13 10.21 13 8ZM15 10V12H18V15H20V12H23V10H20V7H18V10H15ZM1 18V20H17V18C17 15.34 11.67 14 9 14C6.33 14 1 15.34 1 18Z"
            fill={fill}
        />
    </Svg>
);

export const UserRemove: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8ZM17 10V12H23V10H17ZM2 18V20H18V18C18 15.34 12.67 14 10 14C7.33 14 2 15.34 2 18Z"
            fill={fill}
        />
    </Svg>
);

export const Users: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M16.5 13C15.3 13 13.43 13.34 12 14C10.57 13.33 8.7 13 7.5 13C5.33 13 1 14.08 1 16.25V19H23V16.25C23 14.08 18.67 13 16.5 13ZM12.5 17.5H2.5V16.25C2.5 15.71 5.06 14.5 7.5 14.5C9.94 14.5 12.5 15.71 12.5 16.25V17.5ZM21.5 17.5H14V16.25C14 15.79 13.8 15.39 13.48 15.03C14.36 14.73 15.44 14.5 16.5 14.5C18.94 14.5 21.5 15.71 21.5 16.25V17.5ZM7.5 12C9.43 12 11 10.43 11 8.5C11 6.57 9.43 5 7.5 5C5.57 5 4 6.57 4 8.5C4 10.43 5.57 12 7.5 12ZM7.5 6.5C8.6 6.5 9.5 7.4 9.5 8.5C9.5 9.6 8.6 10.5 7.5 10.5C6.4 10.5 5.5 9.6 5.5 8.5C5.5 7.4 6.4 6.5 7.5 6.5ZM16.5 12C18.43 12 20 10.43 20 8.5C20 6.57 18.43 5 16.5 5C14.57 5 13 6.57 13 8.5C13 10.43 14.57 12 16.5 12ZM16.5 6.5C17.6 6.5 18.5 7.4 18.5 8.5C18.5 9.6 17.6 10.5 16.5 10.5C15.4 10.5 14.5 9.6 14.5 8.5C14.5 7.4 15.4 6.5 16.5 6.5Z"
            fill={fill}
        />
    </Svg>
);

export const Login: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
            fill={fill}
        />
    </Svg>
);

export const Logout: React.FC<IconType> = ({ fill, stroke }) => (
    <Svg fill="none">
        <Path
            d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
            fill={fill}
        />
    </Svg>
);
