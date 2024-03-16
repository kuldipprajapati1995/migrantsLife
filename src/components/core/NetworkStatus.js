import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import {networkStatusStyle as styles} from './styles';
const NetworkStatus = () => {
  const [netInfo, setNetInfo] = useState({});
  const [visible, setVisible] = useState(false);
  const [prevState, setPrevState] = useState(true);

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state);
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const getNetInfo = async () => {
    // To get the network state once
    let networkInfo = await NetInfo.fetch();
    return networkInfo;
  };

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setPrevState(netInfo.isConnected);
      setVisible(false);
    }, 3000);
  }, [netInfo.isConnected]);

  return (
    <SafeAreaView style={styles.alwaysOnTop}>
      {visible &&
        prevState !== netInfo.isConnected &&
        (netInfo.isConnected ? (
          <View style={styles.greenContainer}>
            <Text style={styles.titleText}>Connected</Text>
          </View>
        ) : (
          <View style={styles.redContainer}>
            <Text style={styles.titleText}>Network Lost</Text>
          </View>
        ))}
    </SafeAreaView>
  );
};

export default NetworkStatus;
