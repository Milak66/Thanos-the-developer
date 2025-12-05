import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    loading: boolean
    displayText: string;
    openMenuModal: boolean;
    openAutorModal: boolean;
    userData: string;
}

const initialState: InitialState = {
    loading: true,
    displayText: '',
    openMenuModal: false,
    openAutorModal: false,
    userData: ''
}

const alekseyReducer = createSlice({
    name: 'reduser',
    initialState,
    reducers: {
     setLoading: (state) => {
        state.loading = !state.loading;
     },
     writeText: (state, action: PayloadAction<(string)>) => {
        state.displayText = action.payload;
     },
     appendChar: (state, action: PayloadAction<string>) => {
        state.displayText += action.payload;
     },
     onOpenMenuModal: (state) => {
        state.openMenuModal = !state.openMenuModal;
     },
     onOpenAutorModal: (state) => {
        state.openAutorModal = !state.openAutorModal;
     },
     setUserData: (state, action: PayloadAction<(string)>) => {
        state.userData = action.payload;
     }
    },
});
  
export const {
   setLoading,
   writeText,
   appendChar,
   onOpenMenuModal,
   onOpenAutorModal,
   setUserData
} = alekseyReducer.actions;
  
export default alekseyReducer.reducer;