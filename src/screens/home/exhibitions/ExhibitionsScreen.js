import { useTheme } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, FlatList, Platform } from 'react-native';
import HeaderBar from '../../../components/core/HeaderBar';
import { mobileStyles } from './styles';
import { arrExhibitionOptions, exhibitionsOptions } from './ExhibitionsUtils';
import { ResizeValue } from '../../../theme/styles';
import ExhibitionsListItem from './ExhibitionsListItem';
import NavigationService from '../../../utils/NavigationService';
import { openExternalBrowser } from '../../../utils/CommonUtils';

const ExhibitionsScreen = ({ props, navigation, route }) => {
    const { colors } = useTheme();
    const styles = mobileStyles(colors);

    const screenRedirection = (index, item) => {
        if (item.title == exhibitionsOptions.MIGRANTS_LIFE_EXHIBITION_2023) {
          // NavigationService.navigate(navigation, "WebViewScreen", {
          //   title: item.title,
          //   url: item.url
          // })
          openExternalBrowser(item.url)
        }
        else if (item.title == exhibitionsOptions.MIGRANTS_LIFE_EXHIBITION_2024) {
          // NavigationService.navigate(navigation, "WebViewScreen", {
          //   title: item.title,
          //   url: item.url,
          // })
          openExternalBrowser(item.url)
        }
    }

    const renderExhibitionListItem = useCallback(({ item, index }) => {
        return <ExhibitionsListItem
          item={item}
          index={index}
          onItemPressed={() => screenRedirection(index, item)}
        />;
    }, []);

      
    return (
        <View style={styles.mainContainer}>
            <HeaderBar pageTitle={"Exhibitions"} navigation={navigation} isShowWhiteFontColor={false} />
            <View style={styles.subContainerStyle}>
                <FlatList
                    style={{ bottom: Platform.OS === 'ios' ? ResizeValue(10) : 0, marginTop: ResizeValue(10) }}
                    data={arrExhibitionOptions}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderExhibitionListItem}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default ExhibitionsScreen;