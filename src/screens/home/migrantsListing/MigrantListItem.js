import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ResizeValue } from '../../../theme/styles';
import fonts from '../../../assets/fonts';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import { HEADER_GRADIENT } from '../../../utils/Constants';

const MigrantListItem = React.memo(({ item, index, onPressItem }) => {
    const { colors } = useTheme();
    const styles = _styles(colors);
    return (
        <TouchableOpacity activeOpacity={0.9} key={index} style={styles.containerStyle} onPress={() => onPressItem(item)}>
            <FastImage
                source={{ uri: item.image }}
                style={styles.listImageStyle}
                resizeMode={FastImage.resizeMode.cover}
            />
            <LinearGradient colors={HEADER_GRADIENT} style={styles.listContainerStyle}>
                <Text text numberOfLines={1} style={styles.listTitleTextStyle}>{item.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
},
);

const _styles = colors => StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: ResizeValue(5),
        maxWidth: "50%",
        alignItems: "center",
        borderRadius: ResizeValue(5)
    },
    listImageStyle: {
        height: ResizeValue(220),
        width: '100%',
        borderRadius: ResizeValue(5),
        borderWidth: 0.1,
        borderColor: colors.white
      },
      listContainerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        width: '100%',
        justifyContent: 'flex-end',
        bottom: 0,
        borderBottomLeftRadius: ResizeValue(5),
        borderBottomRightRadius: ResizeValue(5),
      },
      listTitleTextStyle: {
        fontSize: ResizeValue(14),
        marginBottom: ResizeValue(8),
        marginTop: ResizeValue(50),
        color: colors.white,
        textAlign: 'center',
        ...fonts.FONT_600,
        includeFontPadding: false,
      }
});

export default MigrantListItem;
