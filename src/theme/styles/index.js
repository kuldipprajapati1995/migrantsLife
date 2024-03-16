import {StyleSheet} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';

export const SIZES_FACTOR = 0.3;
export const STANDARD_WIDTH_MOBILE = 850;
export const ResizeValue = value => moderateVerticalScale(value, SIZES_FACTOR);

export const styles = StyleSheet.create({
  flexDirectionRow: {flexDirection: 'row'},
  backBtn: {height: 30, width: 30, opacity: 0.9},
  container: {
    flex: 1,
    padding: 16,
  },
  subContainer: {flex: 1, paddingVertical: 10},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertmg: {width: 100, height: 100, alignSelf: 'center'},
  buttonStyle: {
    width: '80%',
    marginVertical: 10,
  },
  safeAreaStyle: {flex: 1},
  apiContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {flex: 1, padding: 16},
  viewContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const lottieStyles = StyleSheet.create({
  safeAreaStyle: {flex: 1},
  animation1: {
    width: 100,
    height: 100,
  },
  animation2: {
    width: 300,
    height: 100,
  },
  flexDirectionRow: {flexDirection: 'row'},
  imageStyle: {width: 80, height: 80, borderRadius: 100},
  container: {justifyContent: 'space-between'},
});

export const shimmerStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  sessionTitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 6,
    fontWeight: '600',
  },
  shPlaceholder: {borderRadius: 100},
  shPlaceholder2: {borderRadius: 10},
  shPlaceholder3: {borderRadius: 10, marginTop: 2},
  largeImage: {width: 150, height: 150, borderRadius: 100},
});
