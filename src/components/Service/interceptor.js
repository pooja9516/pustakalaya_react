import api from 'axios';
const axios = api.create({
    baseURL:`http://localhost:3006`,
});
axios.interceptors.request.use(
    function(config){

        return config;
    },
    function(error){
        
        return error;
    }
);
export default axios;