export const THEMES = {
  LIGHT_THEME: 'lightTheme',
  DARK_THEME: 'darkTheme',
};

const lightTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    silver: '#CCCCCC',
    disabled: '#CCCCCC',
    lineColor: '#516D63',
    separatorLine: '#D3D3D3',
    textPlaceHolderColor: '#777777',
    itemBackground: '#FF6363',
    multipleLineTextInputBackground: '#f5f5f5',
    themeBlueColor: '#143D59',
  },
};

const darkTheme = {
  colors: {
    //app colors
    transparent: '#000000000',
    primary: '#325548',
    secondary: '#53665F',
    lightGreen: '#F2F2D4',
    ratingStarColor: '#E7C14F',

    // text colors
    darkTextColor: '#FCF8F3',
    amountTextColor: '#FCF8F3',
    blackTextColor: '#FCF8F3',
    lightTextColor: '#FCF8F3',
    lightTextColor2: '#F3EFE2',
    textColor: '#BDBDBD',
    textPlaceHolderColor: '#777777',
    primaryTextColor: '#FCF8F3',

    // background colors
    itemBackground: '#2F3A36',
    screenBackGround: '#242E2A',
    borderColor: '#757575',
    lightBorderColor: '#E5E5E5',

    //button colors
    buttonBackground: '#FF6363',

    //icon colors
    iconColor: '#FCF8F3',

    //separator
    separator: '#757575',
    separatorDarkColor: '#757575',
    separatorLightColor: '#757575',

    // primary colors
    white: '#ffffff',
    black: '#000000',
    silver: '#CCCCCC',
    disabled: '#757575',
    lineColor: '#516D63',
  },
};

export const getLatestAppTheme = themeName => {
  switch (themeName) {
    case THEMES.LIGHT_THEME:
      return lightTheme;
    case THEMES.DARK_THEME:
      return darkTheme;
    default:
      return lightTheme;
  }
};
