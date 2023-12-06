import axios from 'axios';
const BASE_URL = 'https://instagram-be-nodejs.onrender.com/'
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
  },
  fetchChats(){
    const url = BASE_URL + 'chat';
    return axios.get(url);
  },
  getAllMessages(id){
    const url = BASE_URL + 'message/'+id;
    return axios.get(url);
  },
  sendMessage(data){
    const url = BASE_URL + 'message/';
    return axios.post(url, data);
  }
}

export default appServices;