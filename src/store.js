import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter'

export default configureStore({
  reducer: {
    counter : counterReducer,
  },
})
//redux에서 createStore와 동일한 역할
//+ combine을 통해 모듈 통합 불필요