import PropTypes from 'prop-types';
import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
// import colors from '../../theme/colors';

const ImageButton = props => {
  const {
    onPressImage = null,
    imageStyle,
    imageSource,
    containerStyle,
    disabled,
    activeOpacity = 0.3,
    tintColor = null,
    hitSlop = null,
  } = props;

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPressImage}
      activeOpacity={activeOpacity}
      disabled={disabled}
      hitSlop={hitSlop}
    >
      <Image
        {...props}
        style={[imageStyle, {tintColor: tintColor}]}
        source={imageSource}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

ImageButton.propTypes = {
  resizeMode: PropTypes.oneOf(['contain', 'cover']),
};

ImageButton.defaultProps = {
  resizeMode: 'cover',
};

export default ImageButton;
