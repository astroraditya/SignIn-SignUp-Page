import axios from 'axios';

export default axios.create({
    baseUR: 'https://sutt-front-task-one.herokuapp.com/api/v1/auth/user'
});