import React, {useState, useEffect} from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';

const ProjectForm = ({ values, touched, errors, status }) => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        status && setProjects(projects => [...projects, status])
    }, [status])

    const handleClick = e => {
        e.preventDefault();
        axiosWithAuth().get('https://lrod-diytracker.herokuapp.com/projects/all')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div>
        <h2>Enter Project Info Here</h2>
        <div className = "project-form">
            <Form>
                <p>Project:</p>
                <Field type="text" name="projectname" placeholder= "Project Name Here" />
                {touched.project && errors.project && (
                    <p className= "error">{errors.project}</p>
                )}
                <p>Link:</p>
                <Field type="text" name="projectlink" placeholder= "Link to project" />

                {projects.map(project => (
                    <div>
                    <Form><Field type= "text" name="add" placeholder="idk"/></Form>
                    </div>
                    ))}

                <div className= "button"><button type='submit'>Submit Project</button></div>
            </Form>
            <button type='button' onClick={handleClick}>test</button>
        </div>
        </div>
    )
}

const FormikProjectForm = withFormik({
    mapPropsToValues({ projectname, projectlink }) {
        return {
            projectname: projectname || "",
            projectlink: projectlink || ''
    };
    },
    validationSchema: Yup.object().shape({
        projectname: Yup.string().required(),
        projectlink: Yup.string().required()
    }),
    handleSubmit(values, {resetForm, setStatus}) { 
        console.log(values)
        axiosWithAuth().post(`https://lrod-diytracker.herokuapp.com/users/project/4`, values)
            .then(res => { console.log('RESPONSE', res) }) 
            .catch(err => console.log(err.response));
        resetForm();
    }
})(ProjectForm);


const mapStateToProps = state => {
    return {

    }
}

export default connect(null, {})(FormikProjectForm);