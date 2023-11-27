import axios from 'axios';
axios.interceptors.request.use((request)=>{
    const token = window.sessionStorage.getItem('token');
    if(token)
    {
        request.headers.Authorization = `Bearer ${token}`
    }
    
    return request;
})