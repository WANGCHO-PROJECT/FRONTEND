import axios from 'axios';


// 싱글톤 패턴으로 axios 인스터스를 생성
export const api = axios.create({
    baseURL:"http://localhost:3001",
    headers:{
            /* */
    },
})


export const AuthApi = {
    // 회원정보 관련
    signup: (payload)=> api.post('/api/signup', payload),
    login: (payload)=> api.post('/api/login', payload),
    
    
}