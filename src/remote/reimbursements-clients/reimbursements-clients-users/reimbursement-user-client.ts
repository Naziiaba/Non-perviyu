import axios from 'axios';
//import { environment } from '../../../environment';

export const reimbursementUserClient = axios.create({
    baseURL:"http://localhost:1880/",
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})