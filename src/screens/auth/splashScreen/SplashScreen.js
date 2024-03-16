import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Image, useWindowDimensions } from 'react-native';
import { mobileStyles } from './styles';
import images from '../../../assets/images';
import NavigationService from '../../../utils/NavigationService';
import { asyncStorageKeys, getAsyncData } from '../../../utils/AsyncstorageFunction';
import { ResizeValue } from '../../../theme/styles';

const SplashScreen = ({ props, navigation, route }) => {
    const { colors } = useTheme();
    const styles = mobileStyles(colors);
    const { height, width } = useWindowDimensions()

    useEffect(() => {
        const interval = setInterval(() => {
            // checkScreen()
            NavigationService.reset(navigation, 'Tabs');
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const checkScreen = async () => {
        // getAsyncData(asyncStorageKeys.isUserLogin, (value) => {
        //     console.log("code executed...")
        //     if (value == "true") {
        //         NavigationService.reset(navigation, 'HomeScreen');
        //     } else {
        //         NavigationService.reset(navigation, 'MigrantsListing');
        //     }
        // })
    }

    return (
        <View style={styles.mainContainer}>
            <Image
                source={images.imgSplashLogo}
                resizeMode={'contain'}
                style={{ height: height/3 , width: width}}
            />
        </View>
    );
};

export default SplashScreen;
