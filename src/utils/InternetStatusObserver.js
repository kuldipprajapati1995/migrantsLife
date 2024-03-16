import React, { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

let isConnected = true;

const handleConnectivityChange = state => {
    isConnected = state.isConnected;
};

const InternetStatusObserver = () => {
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    return null; // This component doesn't render anything, it just handles the NetInfo listener
}

const getLatestInternetStatus = () => {
    return isConnected;
};

export { InternetStatusObserver, getLatestInternetStatus };
