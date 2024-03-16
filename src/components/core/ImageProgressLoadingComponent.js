import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import images from '../../assets/images';

export default React.memo(() => {
    const { colors } = useTheme();
    const styles = _styles();
    return (
        <View style={styles.container}>
            {/* <ActivityIndicator
                animating={true}
                color={colors.themeBlueColor}
                size={'large'}
            /> */}
            <FastImage
                source={images.loadingGif}
                style={{ width: 30, height: 30 }}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>
    );
});

export const _styles = () => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
