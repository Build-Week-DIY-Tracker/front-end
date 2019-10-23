import {
    FETCH_PROJECTS,
    DELETE_PROJECT,
    LIKE_PROJECT,
} from '../actions';

const initialState = {
    user: {
        id: 0,
        username: '',
        role: '',
        projects: []
    },
    projects: []
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case DELETE_PROJECT:
            const projectToRemove = state.projects.find(project => {
                if(project.projectid.toString() === action.payload.toString()) {
                    return {
                        project
                    }
                }
            })
            return {
                ...state,
                projects: [...state.projects].filter(project => project.projectid !== projectToRemove.projectid)
            }
        case LIKE_PROJECT:
            return {
                ...state,

            }
        default: 
            return state;
    }
}

export default reducer;