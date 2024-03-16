import * as React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {errorStyles} from './styles';

/**
 * Error screen for Error Boundry when app crash
 *
 * @param {string} error - Error message
 * @property {function}  resetError callback for when dismissing the screen, reload the app
 * @returns Error Screen
 */

const ErrorFallback = props => (
  <SafeAreaView style={errorStyles.container}>
    <Text style={errorStyles.error}>Error Occured</Text>
    <Text style={errorStyles.error}>{props.error.toString() + '\n\n'}</Text>
    <View style={errorStyles.btn}>
      <Button onPress={props.resetError} title={'Try again'} />
    </View>
  </SafeAreaView>
);

export default ErrorFallback;
