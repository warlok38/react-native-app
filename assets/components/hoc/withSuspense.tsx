import React, { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return (
            <Suspense
                fallback={
                    <View>
                        <ActivityIndicator
                            color="white"
                            size="large"
                            style={{ zIndex: 999 }}
                        />
                    </View>
                }
            >
                <WrappedComponent {...props} />
            </Suspense>
        );
    };
}
