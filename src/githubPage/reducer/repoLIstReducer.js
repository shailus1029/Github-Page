import * as RepoActions from '../action/repoAction';

const INITIAL_STATE = {
    repo : [],
    profile : {},
    message : '',
    isRepoGot : false
}

export function RepoListReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RepoActions.GET_REPOLIST_SUCCESS: {
            return { ...state, repo : action.payload, message: '', isRepoGot : true}
        }
        break;
        case RepoActions.GET_REPOLIST_ERROR:{
            return {...state, message : 'Profile Not Found', repo : []}
        }
        break;

        case RepoActions.GET_PROFILE_SUCCESS: {
            return { ...state, profile :  action.payload, message: '', isRepoGot : false }
        }
        break;

        case RepoActions.GET_PROFILE_ERROR: {
            return {...state, message : 'Profile Not Found', profile : {}}
            // return action.data;
        }
        break;

        default:
            return state;
    }
}