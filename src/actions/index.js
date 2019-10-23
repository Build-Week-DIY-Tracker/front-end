import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN = 'LOGIN'
export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'
export const LIKE_PROJECT = 'LIKE_PROJECT'


export const fetchProjects = () => dispatch => {
    axiosWithAuth()
        .get('https://lrod-diytracker.herokuapp.com/projects/all')
        .then(res => dispatch({ type: FETCH_PROJECTS, payload: res.data}))
        .catch(err => console.log(err));
}

export const editProjects = (projectId, project) => dispatch => {
    axios.put(`https://lrod-diytracker.herokuapp.com/projects/edit/${projectId}`, project)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const deleteProject = (projectId) => dispatch => {
    axios.delete(`https://lrod-diytracker.herokuapp.com/projects/project/${projectId}`)
    .then(res => {
        dispatch({ type: DELETE_PROJECT, payload: projectId })
        console.log(res)
    })
    .catch(err => console.log(err));
}