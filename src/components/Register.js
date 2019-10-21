import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = ({touched, errors, status }) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
      status && setUsers(user => [...user, status])
    },[status])
    return (
      <div className="user-form">
        <Form>
          {/* <Field type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )} */}
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <Field type="text" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <Field type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          <button type="submit">Submit!</button>
        </Form>
      </div>
    );
  };
  const FormikUserForm = withFormik({
    mapPropsToValues({ name, username, email, password}) {
      return {
        // name: name || "",
        username: username || "",
        password: password || "",
        primaryemail: email || "",
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
      primaryemail: Yup.string().required(),
    }),
    handleSubmit(values, {setStatus}) { 
      axios.post('https://lrod-diytracker.herokuapp.com/createnewuser', values) 
            .then(res => { setStatus(res.data); console.log(res.data) }) 
            .catch(err => console.log(err.response));
      }
  })(UserForm);
  export default FormikUserForm;





  // const UserForm = ({touched, errors, status }) => {
  //   const [users, setUsers] = useState([])
  //   useEffect(() => {
  //     status && setUsers(user => [...user, status])
  //   },[status])
  //   return (
  //     <div className="user-form">
  //       <form>
  //         <input type="text" name="username" placeholder="Username" onChange={handleChange} />
  //         <input type="password" name="password" placeholder="Password" onChange={handleChange} />
  //         <input type="text" name="email" placeholder="Email" onChange={handleChange} />
  //         <button type="submit">Submit!</button>
  //       </form>
  //     </div>
  //   );
  // };