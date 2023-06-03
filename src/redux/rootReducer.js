import { combineReducers } from 'redux'
import { RepoListReducer } from './repoListReducer';

const rootReducer = combineReducers({
    repo: RepoListReducer
})

export default rootReducer
