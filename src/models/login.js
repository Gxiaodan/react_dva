import { routerRedux } from 'dva/router';
import { signIn, signOut ,test} from '../services/api';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *accountSubmit({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      const response = yield call(signIn, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
    *logout(_, { call, put }) {
      const response = yield call(signOut);
      if (response) {
        yield put(routerRedux.push('/user/login'));
      }
    },
    *test({ payload }, { call, put }){
      const res = yield call(test,payload);
      console.log(res,"res=======");
      // yield put({
      //   type: 'changeLoginStatus',
      //   payload: res,
      // });
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: payload.length > 0 ? 'ok' : 'error',
        type: payload.type,
        info: payload,
      };
    },
    changeSubmitting(state, { payload }) {
      return {
        ...state,
        status: payload,
        submitting: payload,
      };
    },
  },
};
