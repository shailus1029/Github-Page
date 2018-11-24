
import { RepoApi } from "../../api/repoApi.js";


export const GET_REPOLIST = 'GET_REPOLIST';
export const GET_REPOLIST_SUCCESS  = 'GET_REPOLIST_SUCCESS';
export const GET_REPOLIST_ERROR = 'GET_REPOLIST_ERROR';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';


export function GetRepos(username){
    return (dispatch, getState) => {
        return RepoApi.getRepoList(username).then(res => {
            dispatch(GetRepoSuccess(res.data))
        })
        .catch(err => {
            dispatch(GetRepoListError(err))
        })
    }
}

export function GetRepoSuccess(data){
    return {
        type : GET_REPOLIST_SUCCESS,
        payload : data
    }
}

export function GetRepoListError(err){
    return {
        type:GET_REPOLIST_ERROR,
        err
    }
}

export function GetProfile(username){
    return (dispatch, getState) => {
        return RepoApi.getProfile(username).then(res => {
            dispatch(getProfileSuccess(res.data))
        })
        .catch(err => {
            dispatch(getProfileError(err))
        })
    }
}

export function getProfileSuccess(data){
    return {
        type : GET_PROFILE_SUCCESS,
        payload : data
    }
}

export function getProfileError(err){
    return {
        type:GET_PROFILE_ERROR,
        err
    }
}