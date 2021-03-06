import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    status: null,
    isDesktop: false,
    isMobile: false,
    isTablet: false,
}
const mediaSlice = createSlice({
    name: 'mediaSlice',
    initialState: defaultState,
    reducers: {
        setMedia: (state, action) => {
            state.isDesktop = action.payload.isDesktop;
            state.isMobile = action.payload.isMobile;
            state.isTablet = action.payload.isTablet;
        }
    },
})
export const { setMedia } = mediaSlice.actions
export default mediaSlice.reducer