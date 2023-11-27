import axios from 'axios';
const BASE_URL = 'http://localhost:8090/'
const appServices = {
  loginUser(data) {
    const url = BASE_URL + 'auth/login';
    return axios.post(url, data);
  },
  registerUser(data) {
    const url = BASE_URL + 'auth/register';
    return axios.post(url, data);
  },
  getUserDetails() {
    const url = BASE_URL + 'user/';
    return axios.get(url);
  },
  uploadUserImg(payload) {
    const url = BASE_URL + 'user/upload-image';
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    return axios.post(url, payload, {
      headers: headers
    });
  },
  uploadUserProfilePic(payload) {
    const url = BASE_URL + 'user/profile-pic';
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    return axios.put(url, payload, {
      headers: headers
    });
  }
}

export default appServices;