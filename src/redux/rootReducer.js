import {combineReducers} from 'redux';
import {THEMES} from '../theme/themes';
import {CHANGE_THEME_TO_LIGHT, CHANGE_THEME_TO_DARK} from './constants';
import LoaderSlice from './slices/loader/LoaderSlice';

export const themeReducer = (state = {theme: THEMES.LIGHT_THEME}, action) => {
  if (action.type === CHANGE_THEME_TO_LIGHT) {
    return {...state, theme: THEMES.LIGHT_THEME}; 
  } else if (action.type === CHANGE_THEME_TO_DARK) {
    return {...state, theme: THEMES.DARK_THEME};
  }
  return state;
};

const rootReducer = combineReducers({
  ThemeReducer: themeReducer,
  LoaderReducer: LoaderSlice,
});

export default rootReducer;
