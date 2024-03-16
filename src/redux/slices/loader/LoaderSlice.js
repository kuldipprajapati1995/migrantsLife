import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const LoaderSlice = createSlice({
  name: 'Loader',
  initialState,
  reducers: {
    loaderBegin: state => {
      state.loading = true;
    },
    loaderEnd: state => {
      state.loading = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  loaderBegin,
  loaderEnd
} = LoaderSlice.actions;


export default LoaderSlice.reducer;
