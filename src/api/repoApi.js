import { HttpClient } from './httpClient'

const API = 'https://api.github.com/users';

const GET_REPO_LIST = `${API}`;
const GET_PROFILE = `${API}`;



const getRepoList = (username) => {
    return HttpClient.get(`${GET_REPO_LIST}/${username}/repos`);
}

const getProfile = (username) => {
    return HttpClient.get(`${GET_PROFILE}/${username}`);
}


const RepoApi = { getRepoList, getProfile }

export { RepoApi }
