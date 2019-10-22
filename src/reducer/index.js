import {
    FETCH_PROJECTS
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
        default: 
            return state;
    }
}

export default reducer;