import * as RepoActions from './repoAction';

const INITIAL_STATE = {
    repo: [],
    profile: {},
    message: '',
    isRepoGot: false
}

export const RepoListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepoActions.GET_REPOLIST_SUCCESS:
            return {
                ...state,
                message: '',
                isRepoGot: true,
                repo: action.payload,
            }
        case RepoActions.GET_REPOLIST_ERROR:
            return {
                ...state,
                message: 'Profile Not Found',
                repo: []
            }
        case RepoActions.GET_PROFILE_SUCCESS:
            return {
                ...state,
                message: '',
                isRepoGot: false,
                profile: action.payload,
            }
        case RepoActions.GET_PROFILE_ERROR:
            return {
                ...state,
                message: 'Profile Not Found',
                profile: {}
            }
        default:
            return state;
    }
}