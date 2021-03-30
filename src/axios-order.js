import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-78e59-default-rtdb.firebaseio.com/' 
});

export default instance;