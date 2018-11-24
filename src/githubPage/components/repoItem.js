import React, { Component } from 'react';

export class RepoItem extends Component {
    constructor(props){
        super(props);
    }

    repoList = (repoArr) => {
        return (
            repoArr.map((repoDetail, index) => {
                return (
                    <div className="repo-item">
                        <h4>
                            <a href={repoDetail.html_url} className="repo-name">{repoDetail.name}</a>
                        </h4>
                        {   
                            repoDetail.fork ?
                            <span className="fork-detail">Forked from <a href={repoDetail.forks_url}>here</a></span>
                            :
                            ""
                        }
                        {   repoDetail.description ?
                            <div class="repo-description">{repoDetail.description}</div>
                            :
                            ""
                        }
                        <div className="item-footer">
                            {repoDetail.language ?
                                <span>{repoDetail.language}</span>
                                :
                                ""
                            }
                            {repoDetail.license ? 
                                <span>{repoDetail.license.name}</span>
                                :
                                ""
                            }
                            <span>{new Date(repoDetail.updated_at).toDateString()}</span>
                        </div>
                    </div>
                )
            })
        );
    }

    render() {
        return (
            <div>
                {
                    this.props.repoList.length ? 
                        this.repoList(this.props.repoList)
                    :
                        <div className="no-item"> No repos to show </div>
                }                
            </div>
        )

    }
}

export default RepoItem
