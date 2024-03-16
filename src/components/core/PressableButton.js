import * as React from 'react';
import {Pressable, Text} from 'react-native';

/**
 * @description Custom Button
 * @returns Button
 */

const PressableButton = props => (
  <Pressable style={props.style} {...props}>
    <Text style={props.textStyle}>{props.buttonText}</Text>
  </Pressable>
);

export default PressableButton;