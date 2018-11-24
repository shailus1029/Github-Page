import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as RepoActions from '../action/repoAction';
import { connect } from 'react-redux'
import {Profile} from '../components/profile';
import {RepoItem} from '../components/repoItem';

import {SearchBar} from '../components/searchBar';
import _ from 'lodash';

export class RepoList extends Component {
    constructor(props){
        super(props);
        this.state = {
           repoList : [],
           username : ''
        }
    }

    componentDidUpdate(prevProps){
        if((!prevProps.repo.repo.length && this.props.repo.repo.length) || !(_.isEqual(prevProps.repo.repo, this.props.repo.repo))){
            this.setState({
                repoList: this.props.repo.repo
            })
        }
    }
    
    handleTypeFilter = (type) => {
        let filteredArray = [];
        if(type === 'all'){
            filteredArray = this.props.repo.repo;
        }else {
            switch(type){
                case 'sources': 
                filteredArray = this.props.repo.repo.filter((item, index) => {
                    if(item.sources === true){
                        return true;
                    }
                    return false;
                })
                break;

                case 'fork':
                filteredArray = this.props.repo.repo.filter((item, index) => {
                    if(item.fork === true){
                        return true;
                    }
                    return false;
                })
                break;

                case 'archieved':
                filteredArray = this.props.repo.repo.filter((item, index) => {
                    if(item.archived === true){
                        return true;
                    }
                    return false;
                })
                break;

                case 'mirrors': 
                filteredArray = this.props.repo.repo.filter((item, index) => {
                    if(item.mirrors === true){
                        return true;
                    }
                    return false;
                })
                break;

                default :

            }
        }
        return filteredArray
    }

    handleLanguageFilter = (name) => {
        let filteredLanguageArray = this.props.repo.repo.filter((item, index) => {
            if(name === 'All'){
                return this.props.repo.repo;
            }else {
                if(item.language == name){
                    return true;
                }
                return false;
            }       
        })
        return filteredLanguageArray;
    }

    handleFilter = (type, value) => {
        let result = [];
        if(type === 'filter'){
            result = this.handleTypeFilter(value.toLowerCase());
        }else if(type === 'language') {
            result = this.handleLanguageFilter(value);
        }
        this.setState({
            repoList: result
        })
    }
    handleChangeInput = (text) => {
       let resultarray = [];
       resultarray = this.props.repo.repo.filter((item, index)=> {
           if(item.name.includes(text)){
               return true;
           }
           return false;
       });
       this.setState({
        repoList : resultarray
       })
    }
    handleSearchUser = (e) => {
        const username = e.target.value;
        this.setState({username});
    }
    searchUserRepo = () => {
        this.props.actions.GetRepos(this.state.username);
        this.props.actions.GetProfile(this.state.username);
    }

    render(){
        return(
            <div>
                {this.props.repo.message ?
                    <span className="error-msg">{this.props.repo.message}</span>
                    : ""
                }
                <div className="search-div">
                    <input 
                    type="text" 
                    placeholder="Enter User to Find repository..." 
                    value={this.state.text}
                    onChange={this.handleSearchUser}
                    className="main-input"
                    />
                    <div className="button-div">
                        <button 
                            className="search-button-main"
                            onClick={() => {this.searchUserRepo()}}
                        >Search User Repository</button>
                   </div> 
                </div>
            
            <div className="profile">
                <Profile 
                    profileData={this.props.repo.profile} 
                />
            </div>
            <div className="search-list-div">
                <div className="search-bar"> 
                     <SearchBar 
                      dropdownSelect = {this.handleFilter}
                      inputChange = {this.handleChangeInput} />
                </div>
                <div className="repo-list"> 
                    <RepoItem repoList = {this.state.repoList} />
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        repo: state.repo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(RepoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
