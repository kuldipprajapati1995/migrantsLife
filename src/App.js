import React, { useEffect } from "react";
import { SafeAreaView, StatusBar } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from "react-native-flash-message";
import AppNavigator from "./navigations/AppNavigator";
import { InternetStatusObserver } from "./utils/InternetStatusObserver";
import { ErrorFallback } from "./components/core";
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from "./redux/ConfigureStore";
import { PersistGate } from 'redux-persist/integration/react'
import GLoader from "./components/core/GLoader";
import ApiService from "./apiManager/ApiService";

const App = () => {

  const navigationRef = React.useRef();
  const routeNameRef = React.useRef();

  useEffect(() => {
    ApiService.initializeStore(store);
    SplashScreen.hide();
  }, []);

  // useEffect(() => {
  //   const registerDeviceToken = async () => {
  //     try {
  //       // Get the device token
  //       const deviceToken = await messaging().getToken();

  //       // Specify the topic you want to subscribe to
  //       const topic = 'your_topic_name';

  //       // Send device token and topic to your backend server
  //       await axios.post('https://your-backend-server.com/api/register-token', {
  //         deviceToken,
  //         topic,
  //       });

  //       console.log(`Device token "${deviceToken}" associated with topic "${topic}"`);
  //     } catch (error) {
  //       console.error('Error registering device token:', error);
  //     }
  //   };

  //   // Call the function to register device token when component mounts
  //   registerDeviceToken();

  //   // Clean up function
  //   return () => {
  //     // Any cleanup code if needed
  //   };
  // }, []);

  // return (
  //   // Your app UI components
  // );


  //Render Main View of Application
  const _renderMainView = () => (
    <>
      <SafeAreaView style={{ flex: 0 }} backgroundColor={'#143D59'} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={(error, stacktrace) => console.log(error, stacktrace)}>
            <GLoader />
            <StatusBar
              backgroundColor={'#143D59'}
              barStyle={'light-content'}
              hidden={false}
            />
            <AppNavigator
              ref={navigationRef}
              onReady={() => {
                routeNameRef.current =
                  navigationRef.current.getCurrentRoute().name;
              }}
              onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName =
                  navigationRef.current.getCurrentRoute().name;

                if (previousRouteName !== currentRouteName) {
                  analyticsWrapper.trackScreen(currentRouteName);
                }
                routeNameRef.current = currentRouteName;
              }}
            />
            <InternetStatusObserver />
            <FlashMessage position="top" />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </>
  );
  return _renderMainView();

};

export default App;
