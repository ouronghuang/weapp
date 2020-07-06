import env from './env';
import { getToken, getTokenExpiredAt, logout, setToken } from './auth';
import { refresh } from '../api/auth';

const baseURL = env === 'prod' ? 'https://example.com/api' : 'http://example.test/api';

const errors = {
  403: '禁止访问',
  404: '资源未找到',
  405: '不允许的访问',
  419: '资源已过期',
  429: '请求过多'
};

export function request(url, options = {}) {
  wx.showNavigationBarLoading();

  return new Promise((resolve, reject) => {
    wx.request({
      method: 'get',
      data: {},
      ...options,
      url: `${baseURL}/${url}`,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode <= 300) {
          resolve(res.data);
        } else {
          if (res.statusCode === 401) {
            logout();

            wx.navigateTo({
              url: '/pages/auth/login'
            });
          } else {
            const title = res.statusCode === 422 ? res.data.message : (errors[res.statusCode] || '服务器错误');

            wx.showToast({
              title,
              icon: 'none',
              duration: 2000
            });
          }

          reject(res);
        }
      },
      fail(error) {
        reject(error);
      },
      complete() {
        wx.hideNavigationBarLoading();
      }
    });
  });
}

export async function authRequest(url, options = {}) {
  if (getToken() && new Date().getTime() > getTokenExpiredAt()) {
    const data = await refresh();
    setToken(data);
  }

  options.header = {
    Authorization: 'Bearer ' + getToken()
  };

  return await request(url, options);
}
