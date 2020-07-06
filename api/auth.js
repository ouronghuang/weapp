import { request } from '../utils/request';
import { getToken } from '../utils/auth';

export function login(data) {
  return request('weapp/authorizations', {
    method: 'post',
    data
  });
}

export function refresh() {
  return request('authorizations/current', {
    method: 'put',
    header: {
      'Authorization': 'Bearer ' + getToken()
    }
  });
}

export function logout() {
  return request('authorizations/current', {
    method: 'delete',
    header: {
      'Authorization': 'Bearer ' + getToken()
    }
  });
}
