import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization:"Client-ID 89668cee8827096a89e49b5fadaa12fe1388d13f4ee3ea17fb54bc99d49d4c83"
    }
})