import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ResizeValue } from '../../theme/styles';
import fonts from '../../assets/fonts';
import images from '../../assets/images';
import icons from '../../assets/icons';
import NavigationService from '../../utils/NavigationService';
import ImageButton from './ImageButton';
// import { useSelector } from 'react-redux';

import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const HeaderBar = React.memo(props => {
  const {
    pageTitle = '',
    navigation,
    isShowHeaderAppImage = false,
    isShowBack = false,
    isShowUserVerified = false,
    isShowTitleLoading = false,
    isLoading = true,
    isShowWhiteFontColor = true
  } = props;
  const { colors } = useTheme();
  const styles = _mobileHeaderBarStyles(colors);
  return (
    <>
      <View style={[styles.headerShadowContainerStyle, {
        backgroundColor: isShowBack ? colors.themeBlueColor : colors.white
      }]}>
        {
          isShowHeaderAppImage &&
          <View style={styles.headerAppIconContainer}>
            <Image
              source={images.imgHeaderBar}
              resizeMode={'stretch'}
              style={styles.headerAppIconStyle}
            />
          </View>
        }
        {
          isShowBack &&
          <ImageButton
            onPressImage={() => {
              // if (isFinalTutorialScreen) {
              //   NavigationService.reset(navigation, "LoginScreen");
              // } else {
                NavigationService.goBack(navigation)
              // }
            }}
            // containerStyle={{ marginLeft: ResizeValue(16), marginVertical: ResizeValue(20), backgroundColor: '#E8E8EA', borderRadius: ResizeValue(5) }}
            imageStyle={styles.icBackStyle}
            imageSource={icons.icBackButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          />
        }
        {
          pageTitle && <View style={[styles.headerTextContainerStyle, { marginLeft: isShowBack ? ResizeValue(15) : ResizeValue(20) }]}>
            {
              isShowTitleLoading &&
              
              <View style={{ flexDirection: 'row', }}>
                <ShimmerPlaceHolder autoRun visible={!isLoading} style={styles.headerTextStyle}>
                <Text numberOfLines={1} style={styles.headerTextStyle}>{pageTitle}</Text>
                </ShimmerPlaceHolder>                
                {
                  isShowUserVerified &&
                  <ShimmerPlaceHolder autoRun visible={!isLoading} style={{ width: ResizeValue(30), height: ResizeValue(20), marginLeft: ResizeValue(5) }}>
                  <Image
                    source={icons.icVerified}
                    resizeMode={'contain'}
                    style={styles.icUserVerifyStyle}                  
                  />
                </ShimmerPlaceHolder>
                }
              </View>
            }
            {isShowTitleLoading == false && <Text numberOfLines={1} style={[styles.headerTextStyle, {
               marginRight: isShowBack ? ResizeValue(59) : ResizeValue(26),
               color: isShowWhiteFontColor ? colors.white : colors.themeBlueColor,
            }]}>{pageTitle}</Text>}
          </View>
        }
      </View>
    </>
  );
});

HeaderBar.propTypes = {
  title: PropTypes.string,
};

HeaderBar.defaultProps = {
  title: '',
};

export default HeaderBar;

export const _mobileHeaderBarStyles = colors => StyleSheet.create({
  headerShadowContainerStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: ResizeValue(25),
    textAlign: 'center',
  },
  headerTextStyle: {
    fontSize: ResizeValue(18),
    ...fonts.FONT_700,
    flex: 1,
    includeFontPadding: false,
    textAlign: 'center',
  },
  icBackStyle: {
    height: ResizeValue(32),
    width: ResizeValue(32),
    marginStart: ResizeValue(16),
  },
  icUserVerifyStyle: {
    height: ResizeValue(20),
    height: ResizeValue(20),
  },
  headerAppIconContainer: {
    flex: 1,
    marginVertical: ResizeValue(5),
    justifyContent: 'center',
  },
  headerAppIconStyle: {
    height: ResizeValue(75),
    width: '70%',
    alignSelf: 'center',
  }
});

