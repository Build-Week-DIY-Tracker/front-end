import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects, deleteProject } from '../actions';
import axios from 'axios';

const Projects = props => {
    useEffect(() => {
      props.fetchProjects();
      console.log('fetching')
    }, [props.projects.length])

    const handleDelete = e => {
      props.deleteProject(e.target.id);
    }

    const addLike = e => {
      axios.post('https://lrod-diytracker.herokuapp.com/users/user/56/project')
    }

  return (
    <div className = "projects">
    <div className="projects-list">
      {props.projects.map((project, index) => {
        return (
          <div className="note" key={index}>
            <h2>{project.projectname}</h2>
            <div className="likes-container"><h3>Likes:</h3><p className="likes">{project.likes}</p></div>
            <div className= "button-container">
            <i id={project.projectid} class="far fa-thumbs-up" onClick={() => project.likes += 1}></i>
            <a id='project-link' href={project.projectlink} target='_blank' rel="noopener noreferrer">Source</a>
            <Link to={`/projects/edit/${project.projectid}`}><button>Edit</button></Link>
            <button id={project.projectid} onClick={handleDelete}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}


export default connect(mapStateToProps, { fetchProjects, deleteProject })(Projects);