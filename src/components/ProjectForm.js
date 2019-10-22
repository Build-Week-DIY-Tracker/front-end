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
        <div className = "project-form">
            <Form>
                <Field type="text" name="projectname" placeholder= "Project Name Here" />
                {touched.project && errors.project && (
                    <p className= "error">{errors.project}</p>
                )}
                <Field type="text" name="projectlink" placeholder= "Project Name Here" />
                {/* <Field type="text" name="date" placeholder= "Date of project here" />
                {touched.project && errors.speciies && (
                    <p className= "error">{errors.date}</p>
                )}
                <Field type= "text" name="step1" placeholder= "Step 1" />
                <Field type= "text" name="step2" placeholder= "Step 2" />
                <Field type= "text" name="step3" placeholder= "Step 3" />
                <Field type= "text" name="step4" placeholder= "Step 4" />
                <Field type= "text" name="step5" placeholder= "Step 5" />
                <Field type= "text" name="step6" placeholder= "Step 6" />
                <Field type= "text" name="step7" placeholder= "Step 7" />
                <Field type= "text" name="step8" placeholder= "Step 8" /> */}
                <button type='submit'>submit here</button>
            </Form>
            <button type='button' onClick={handleClick}>test</button>
        </div>
    )
}

//, date, step1, step2, step3, step4, step5, step6, step7, step8

// date: date || "",
// step1: step1 || " ",
// step2: step2 || " ",
// step3: step3 || " ",
// step4: step4 || " ",
// step5: step5 || " ",
// step6: step6 || " ",
// step7: step7 || " ",
// step8: step8 || " ",

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
    handleSubmit(values, {setStatus}) { 
        console.log(values)
        axiosWithAuth().post(`https://lrod-diytracker.herokuapp.com/users/project/4`, values)
            .then(res => { console.log('RESPONSE', res) }) 
            .catch(err => console.log(err.response));
    }
})(ProjectForm);


const mapStateToProps = state => {
    return {

    }
}

export default connect(null, {})(FormikProjectForm);