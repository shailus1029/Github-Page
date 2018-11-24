import {combineReducers} from 'redux'
import {RepoListReducer} from '../githubPage/reducer/repoLIstReducer';

const rootReducer = combineReducers({
    repo : RepoListReducer
})

export default rootReducer
