import { authRequest } from '../utils/request';

export function getCurrentUser() {
  return authRequest('user');
}
