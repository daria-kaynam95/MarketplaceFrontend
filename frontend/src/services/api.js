import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:5001', // твой backend
    headers: {
        'Content-Type': 'application/json'
    }
});
