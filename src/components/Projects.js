import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';

const Projects = props => {
    console.log(props)
    useEffect(() => {
      props.fetchProjects();
    }, [])
  return (
    <div className="projects-list">
      {props.projects.map((project, index) => {
        return (
          <div className="note" key={index}>
            <h2>{project.projectname}</h2>
            <p>Date: {project.date}</p>
            <h3>Steps</h3>
            <p>{project.step1}</p>
            <p>{project.step2}</p>
            <p>{project.step3}</p>
            <p>{project.step4}</p>
            <p>{project.step5}</p>
            <p>{project.step6}</p>
            <p>{project.step7}</p>
            <p>{project.step8}</p>      
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}


export default connect(mapStateToProps, { fetchProjects })(Projects);