import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as RepoActions from '../action/repoAction';
import RepoListView from '../components/repoListView';
import { handleTypeFilter } from '../../utils';

export class RepoListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repoList: [],
            username: ''
        }
    }

    componentDidUpdate(prevProps) {
        const { repo } = this.props;
        if ((!prevProps.repo.repo.length && repo.repo.length) || !(_.isEqual(prevProps.repo.repo, repo.repo))) {
            this.setState({
                repoList: repo.repo
            })
        }
    }

    handleLanguageFilter = (name) => {
        const { repo } = this.props;
        let filteredLanguageArray = repo.repo.filter((item, index) => {
            if (name === 'All') {
                return repo.repo;
            } else {
                if (item.language === name) {
                    return true;
                }
                return false;
            }
        })
        return filteredLanguageArray;
    }

    handleFilter = (type, value) => {
        let result = [];
        if (type === 'filter') {
            result = handleTypeFilter(value.toLowerCase(), this.props.repo.repo);
        } else if (type === 'language') {
            result = this.handleLanguageFilter(value);
        }
        this.setState({
            repoList: result
        })
    }

    handleChangeInput = (text) => {
        const resultarray = this.props.repo.repo.filter((item) => item.name.includes(text));
        this.setState({
            repoList: resultarray
        })
    }

    handleSearchUser = (e) => {
        const username = e.target.value;
        this.setState({ username });
    }

    searchUserRepo = () => {
        const { GetRepos, GetProfile } = this.props.actions;
        GetRepos(this.state.username);
        GetProfile(this.state.username);
    }

    render() {
        const { repo } = this.props;
        const { text, repoList } = this.state;
        return (
            <RepoListView
                repo={repo}
                text={text}
                repoList={repoList}
                handleFilter={this.handleFilter}
                searchUserRepo={this.searchUserRepo}
                handleSearchUser={this.handleSearchUser}
                handleChangeInput={this.handleChangeInput}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        repo: state.repo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(RepoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoListContainer);
