import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const icons = {
    Error: (
        <View>
            <Svg viewBox="0 0 24 24" fill="none">
                <Path
                    d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"
                    fill="#FF5A5F"
                />
            </Svg>
        </View>
    ),
    arrowDown: (
        <View>
            <Svg viewBox="0 0 24 24" fill="none">
                <Path
                    d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z"
                    fill="#323232"
                />
            </Svg>
        </View>
    ),
    arrowUp: (
        <View>
            <Svg viewBox="0 0 24 24" fill="none">
                <Path
                    d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
                    fill="#323232"
                />
            </Svg>
        </View>
    ),
};
