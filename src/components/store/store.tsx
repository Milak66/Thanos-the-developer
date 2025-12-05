import { configureStore } from '@reduxjs/toolkit';
import alekseyReducer from '../reduser/reduser'; 

const store = configureStore({

  reducer: {
    aleksey: alekseyReducer, 
  },
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;