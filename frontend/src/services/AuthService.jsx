import axios from "axios";

const API_URL = "/api/user/";

// Request interceptors for API calls
axios.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`; 
    config.headers['content-type'] = "application/x-www-form-urlencoded"; 
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const AuthService = {
  register,
};

export default AuthService;
