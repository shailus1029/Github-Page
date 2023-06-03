import React, { memo } from 'react';

const RepoItem = (props) => {
    const { repoList } = props;
    return (
        <div>
            {repoList.length > 0 ?
                <div>
                    {repoList.map((repo) => {
                        return (
                            <div className="repo-item">
                                <h4>
                                    <a href={repo.html_url} className="repo-name">{repo.name}</a>
                                </h4>
                                <span className="fork-detail">Forked from <a href={repo.forks_url}>here</a></span>
                                <div class="repo-description">{repo.description}</div>
                                <div className="item-footer">
                                    <span>{repo.language}</span>
                                    <span>{new Date(repo.updated_at).toDateString()}</span>
                                </div>
                            </div>
                        )
                    })}
                </div> :
                <div className="no-item">No repos to show</div>
            }
        </div>
    )
}

export default memo(RepoItem)
