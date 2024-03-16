import analytics from '@react-native-firebase/analytics';

async function trackScreen(screenName) {
  await analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenName,
  });
}

const trackUserId = async userId => {
  await analytics().setUserId(userId?.toString() ?? '0');
};

async function trackUserProperty(unitId, userId, property) {
  await analytics().setUserId(userId?.toString() ?? '0');
  await analytics().setUserProperties({
    unitId,
    userId,
    property,
  });
}

const analyticsWrapper = {
  trackScreen,
  trackUserId,
  trackUserProperty,
};

export default analyticsWrapper;
