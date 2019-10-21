import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseUrl: 'https://lrod-diytracker.herokuapp.com/',
        headers: {
            Authorization: token,
        }
    })
}