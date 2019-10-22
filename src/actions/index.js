import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN = 'LOGIN'
export const FETCH_PROJECTS = 'FETCH_PROJECTS'


export const fetchProjects = () => dispatch => {
    axiosWithAuth()
        .get('https://lrod-diytracker.herokuapp.com/projects/all')
        .then(res => dispatch({ type: FETCH_PROJECTS, payload: res.data}))
        .catch(err => console.log(err));
}

//dispatch({ type: FETCH_PROJECTS, payload: res.data})