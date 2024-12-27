import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage에 저장
import themeReducer from './slices/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['theme'], // 유지할 리덕스 slice 목록
};

const persistedReducer = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    theme: persistedReducer, // persistReducer 사용
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
