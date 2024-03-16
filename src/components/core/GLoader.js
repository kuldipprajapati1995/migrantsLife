import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Modal, View, useWindowDimensions, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { ResizeValue } from '../../theme/styles';

export default React.memo(() => {
  const { height } = useWindowDimensions();
  const { colors } = useTheme();
  const styles = _styles(colors, height);

  const { loading } = useSelector(state => state.LoaderReducer);

  return (
    <Modal visible={loading} transparent={true} animationType={'none'}>
      <View style={styles.container}>
        <View style={styles.innerContainerStyle}>
          <View style={styles.indicatorContainerStyle}>
            <ActivityIndicator
              animating={true}
              color={'white'}
              size={'large'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
});

export const _styles = (colors, height) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: height,
  },
  innerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainerStyle: {
    backgroundColor: '#143D59',
    justifyContent: 'center',
    alignItems: 'center',
    height: ResizeValue(80),
    width: ResizeValue(80),
    borderRadius: ResizeValue(10)
  }
});
