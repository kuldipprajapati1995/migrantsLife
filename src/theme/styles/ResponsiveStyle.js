import {StyleSheet} from 'react-native';

export default function CreateResponsiveStyle(webStyles, mobileStyles) {
  const web = StyleSheet.create(webStyles);
  const mobile = StyleSheet.create(mobileStyles);

  return layout => style => {
    if (layout.width < 768 && mobile.hasOwnProperty(style)) {
      return StyleSheet.compose(web[style], mobile[style]);
    } else {
      return web[style];
    }
  };
}
