import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RepoListContainer from './containers/repoListContainer'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={RepoListContainer} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }