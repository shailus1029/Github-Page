import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import RepoList from './githubPage/containers/repoList'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={RepoList} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }