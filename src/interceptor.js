import axios from "axios";
console.log("");
const newAxios = axios.create({
    baseURL: 'https://pustakalaya-beckbone.onrender.com',
    timeout: 1000,
    headers: {
        "Content-Type": 'application/json'
    },
});
export default newAxios;