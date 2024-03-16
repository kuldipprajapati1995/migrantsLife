//below code when i click TextInput then open keyboard goes bottomMainInputContainerStyle view up after dismiss keyboard getting some space on bottom in android platform, please correct my logic

import * as React from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const CustomKeyboardAvoidingView = (props) => {
  const headerHeight = useHeaderHeight();
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const statusBarHeight = Platform.OS == "ios" ? 50 : (isKeyboardOpen ? 0 : getStatusBarHeight() + 10 )

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : null} keyboardVerticalOffset={Platform.OS === "ios" ? (headerHeight + statusBarHeight) : statusBarHeight}>
      {props.children}
    </KeyboardAvoidingView>
  )
}