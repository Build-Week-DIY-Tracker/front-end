import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { editProjects } from '../actions';

const EditProject = (props) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        const project = props.projects.find(project => project.projectid === Number(props.match.params.id))
        console.log("Single PROJECT", project)
        setProject(project);
    }, [props.match.params.id])

    
    const handleClick = e => {
        e.preventDefault();
        axiosWithAuth().get('https://lrod-diytracker.herokuapp.com/projects/all')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const handleChange = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.editProjects(project.projectid, {projectname: project.projectname, projectlink: project.projectlink});
        props.history.push('/projects');
    }

    return (
        <div>
        <h2>Enter Project Info Here</h2>
        <div className = "project-form">
            <form onSubmit={handleSubmit}>
                <p>Project:</p>
                <input value={project.projectname} type="text" name="projectname" placeholder= "Project Name Here" onChange={handleChange} />
                <p>Link:</p>
                <input value={project.projectlink} type="text" name="projectlink" placeholder= "Link to project" onChange={handleChange} />
                <div className= "button"><button type='submit'>Submit Edit</button></div>
            </form>
            <button type='button' onClick={handleClick}>test</button>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
    }
}

export default connect(mapStateToProps, { editProjects })(EditProject);