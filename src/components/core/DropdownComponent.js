import React from 'react';
import { View } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const DropdownComponent = ({
  data,
  maxHeight = 400,
  placeHolder,
  value,
  onChange = null,
  searchEnabled = false,
  containerStyle = {},
  ...props
}) => {
  return (
    <View style={[containerStyle,{ backgroundColor: 'white'}]}>
      <Dropdown
        {...props}
        data={data}
        maxHeight={maxHeight}
        labelField="label"
        valueField="value"
        placeholder={placeHolder}
        value={value}
        search={searchEnabled}
        searchPlaceholder="Search..."
        onChange={item => onChange(item)}
      />
    </View>
  );
};

export default DropdownComponent;
