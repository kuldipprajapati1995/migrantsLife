import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { InputTextBoxStyle as _styles } from './styles';
import ImageButton from './ImageButton';
import { ResizeValue } from '../../theme/styles';

export default React.memo(
  ({
    rightImage,
    onTextChange,
    showPasswordEntry = false,
    textValue = '',
    onEndEditing,
    onBlur,
    showRightIcon = false,
    inputPlaceHolder,
    onPressRightIcon,
    returnType,
    setReference,
    keyboardType = 'default',
    isEditable = true,
    onSubmitEditing,
    maxLength,
    textFieldTitle,
    headerButtonText,
    headerButtonAction,
    autoCapitalize
  }) => {
    const { colors } = useTheme();
    const styles = _styles(colors);

    return (
      <View>
        {
          textFieldTitle &&
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: ResizeValue(15),}}>
              <Text style={styles.headerTitleStyle}>{textFieldTitle}</Text> 
              {
                headerButtonText &&
                <TouchableOpacity onPress={headerButtonAction}>
                  <Text style={styles.headerRightButtonTextStyle}>{headerButtonText}</Text>
                </TouchableOpacity>
              }
          </View>
        }

{/* { textFieldTitle && <Text style={styles.headerTitleStyle}>{textFieldTitle}</Text> } */}
        <View style={styles.inputContainer}>
          <TextInput
            ref={setReference}
            style={styles.inputText}
            placeholder={inputPlaceHolder}
            onChangeText={onTextChange}
            placeholderTextColor={colors.textPlaceHolderColor}
            multiline={false}
            value={textValue}
            onEndEditing={onEndEditing}
            onBlur={onBlur}
            secureTextEntry={showPasswordEntry}
            returnKeyType={returnType}
            keyboardType={keyboardType}
            editable={isEditable}
            onSubmitEditing={onSubmitEditing}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
          />

          {showRightIcon && (
            <ImageButton
              onPressImage={onPressRightIcon}
              imageStyle={styles.image}
              imageSource={rightImage}
            />
          )}
        </View>
      </View>
    );
  },
);
