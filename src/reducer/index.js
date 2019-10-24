import {
    FETCH_PROJECTS,
    DELETE_PROJECT,
    SET_LINK_TEXT,
} from '../actions';

const initialState = {
    user: {
        id: 0,
        username: '',
        role: '',
        projects: []
    },
    projects: [],
    linktext: '',
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
        case SET_LINK_TEXT:
            return {
                ...state,
                linktext: action.payload,
            }
        default: 
            return state;
    }
}

export default reducer;