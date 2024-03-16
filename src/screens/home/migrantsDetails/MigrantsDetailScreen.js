import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { mobileStyles } from './styles';
import HeaderBar from '../../../components/core/HeaderBar';
import FastImage from 'react-native-fast-image';
import { openExternalBrowser } from '../../../utils/CommonUtils';
import LinearGradient from 'react-native-linear-gradient';
import { HEADER_GRADIENT } from '../../../utils/Constants';

const MigrantsDetailScreen = ({ props, navigation, route }) => {
    const { colors } = useTheme();
    const styles = mobileStyles(colors);
    const { dictMigrantsDetails } = route.params;

    return (
        <View style={styles.mainContainer}>
            <HeaderBar
                pageTitle={"Migrants Life"}
                navigation={navigation}
                isShowBack={true}
            />
            <ScrollView style={styles.subContainerStyle}>
                <View>
                    <FastImage
                        style={styles.imgStyle}
                        source={{ uri: dictMigrantsDetails.image }}
                    />
                    <LinearGradient colors={HEADER_GRADIENT} style={styles.imgContainerStyle}>
                        <Text numberOfLines={1} style={styles.titleTextStyle}>{dictMigrantsDetails.title}</Text>
                    </LinearGradient>
                </View>
               
                <View style={styles.scrollViewContainerStyle}>
                    <Text numberOfLines={0} style={styles.descriptionTextStyle}>{dictMigrantsDetails.description}</Text>
                    {
                        dictMigrantsDetails.link != null &&
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.buttonContainerStyle}
                            onPress={() => {
                                openExternalBrowser(dictMigrantsDetails.link)
                            }}
                        >
                            <Text style={styles.buttonTextStyle}>Read More</Text>
                        </TouchableOpacity>
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default MigrantsDetailScreen;
