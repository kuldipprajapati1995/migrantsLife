import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { mobileStyles } from './styles';
import HeaderBar from '../../../components/core/HeaderBar';
import WebView from 'react-native-webview';
import { ResizeValue } from '../../../theme/styles';

const WebViewScreen = ({ props, navigation, route }) => {
    const { colors } = useTheme();
    const styles = mobileStyles(colors);
    const { height, width } = useWindowDimensions()
    return (
        <View style={styles.mainContainer}>
            <HeaderBar
                pageTitle={route.params.title}
                isShowBack={true}
                navigation={navigation}
            />
            <View style={styles.subContainerStyle}>
                <WebView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    source={{ uri: route.params.url }}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    style={{
                        width: width - ResizeValue(32),
                        height: height - ResizeValue(40),
                    }}
                />
            </View>
        </View>
    );
};

export default WebViewScreen;
