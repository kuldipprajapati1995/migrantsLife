import PropTypes from 'prop-types';
import * as React from 'react';
import {TextInput, View, Image} from 'react-native';
import icons from '../../assets/icons';
import {searchBarStyles as _styles} from './styles';
import {useTheme} from '@react-navigation/native';
import { ResizeValue } from '../../theme/styles';
// import ImageButton from './ImageButton';

const SearchBar = ({
  placeholder,
  onChangeValue,
  onSubmitText = null, 
  setSearchRef,
  isEditable = true,
  containerStyle
}) => {
  const {colors} = useTheme();
  const styles = _styles(colors);
  return (
    <View style={[styles.searchBarContainerStyle, containerStyle]}>
      <View style={styles.searchBarSubContainerStyle}>
        <Image
          style={[styles.searchIcon, {tintColor: '#B1B1B6'}]}
          source={icons.icSearch}
          resizeMode={'contain'}
        />
        <TextInput
          style={[styles.textInput, {color: colors.black}]}
          onChangeText={onChangeValue}
          placeholder={placeholder}
          placeholderTextColor={'#B1B1B6'}
          multiline={false}
          onSubmitEditing={onSubmitText}
          numberOfLines={1}
          ellipsizeMode={'tail'}
          ref={setSearchRef}
          autoCorrect={false}
          editable={isEditable}
        />
        {/* <ImageButton
          onPressImage={() => {}}
          imageStyle={styles.clearIcon}
          imageSource={icons.icSearchBarClear}
          tintColor={colors.textColor}
        /> */}
      </View>
    </View>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  value: '',
  placeholder: 'Search',
  handleChange: () => {},
};

export default SearchBar;
