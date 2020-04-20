import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField: ''
}

export const searchEngine = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD :
            return {...state, searchEngine: action.payload}
        default:
            return state;
    }
}

