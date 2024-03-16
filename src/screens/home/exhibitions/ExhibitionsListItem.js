import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import fonts from '../../../assets/fonts';
import icons from '../../../assets/icons';
import { ResizeValue } from '../../../theme/styles';

const ExhibitionsListItem = React.memo(({item, index, onItemPressed}) => {
  const {colors} = useTheme();
  const styles = _styles(colors);

  return (
    <TouchableOpacity style={styles.textContainer} activeOpacity={0.8} onPress={() => onItemPressed()}>
      <Image
        source={item.icon}
        resizeMode={'contain'}
        style={styles.icSettingStyles}
      />
      <Text style={[styles.menuTextStyle]} children={item.title} />
      <Image
        source={icons.icDetailsArrow}
        resizeMode={'contain'}
        style={styles.icDetailsArrowStyle}
      />
    </TouchableOpacity>
  );
});

const _styles = colors => StyleSheet.create({
    icons: {
      paddingHorizontal: ResizeValue(16),
    },
    textContainer: {
      flexDirection: 'row',
      borderBottomColor: colors.borderColor,
      borderBottomWidth: 0.5,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuTextStyle: {
      color: colors.black,
      fontSize: ResizeValue(14),
      lineHeight: ResizeValue(16),
      letterSpacing: 0.02,
      paddingVertical: ResizeValue(20),
      ...fonts.FONT_500,
      flex: 1,
      marginStart: ResizeValue(15),
    },
    icSettingStyles: {
      height: ResizeValue(20),
      width: ResizeValue(20),
    },
    icDetailsArrowStyle: {
      height: ResizeValue(12),
      width: ResizeValue(12),
    }
  });

export default ExhibitionsListItem;
