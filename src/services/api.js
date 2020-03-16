import Store from 'store';
import request from '../utils/request';

// 用户登录
export async function signIn(params) {
  return request('/user/login', {
    method: 'POST',
    body: params,
  });
}

// 用户退出了
export async function signOut() {
  // 清除TOKEN，模拟退出
  Store.clearAll();
  return true;
}

// http://172.20.32.41:7009/screen/findScreen/1

export async function test(params) {
  return request('/screen/findScreen/1', {}, "test");
}