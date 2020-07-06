export function getToken() {
  return wx.getStorageSync('access_token');
}

export function getTokenExpiredAt() {
  return wx.getStorageSync('access_token_expired_at');
}

export function setToken(data) {
  wx.setStorageSync('access_token', data.access_token);
  wx.setStorageSync('access_token_expired_at', new Date().getTime() + data.expired_at * 1000);
}

export function logout() {
  return wx.clearStorage();
}
