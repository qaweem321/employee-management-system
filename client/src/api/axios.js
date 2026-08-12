import axios from "axios";

const api = axios.create({
    baseURL: (import.meta.env.VITE_BASE_URL || "http://localhost:4000") + "/api"
})

// Attach Auth token to all network requests
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

// If the API ever responds 401 (expired/invalid token), clear the stale
// token and send the user back to the login screen instead of letting
// every page handle that failure individually.
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401 && window.location.pathname !== "/login"){
            localStorage.removeItem("token")
            window.location.href = "/login"
        }
        return Promise.reject(error)
    }
)

export default api