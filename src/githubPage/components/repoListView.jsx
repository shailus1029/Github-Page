import React from 'react';
import _ from 'lodash';
import { Profile } from '../components/profile';
import { RepoItem } from '../components/repoItem';
import { SearchBar } from '../components/searchBar';

const RepoListView = (props) => {
    const {
        text,
        repo,
        repoList,
        handleFilter,
        searchUserRepo,
        handleSearchUser,
        handleChangeInput,
    } = props;

    return (
        <div>
            {repo.message && <span className="error-msg">{repo.message}</span>}
            <div className="search-div">
                <input
                    type="text"
                    value={text}
                    className="main-input"
                    onChange={handleSearchUser}
                    placeholder="Enter User to Find repository..."
                />
                <div className="button-div">
                    <button
                        className="search-button-main"
                        onClick={searchUserRepo}
                    >Search User Repository</button>
                </div>
            </div>

            <div className="profile">
                <Profile profileData={repo.profile} />
            </div>
            <div className="search-list-div">
                <div className="search-bar">
                    <SearchBar
                        dropdownSelect={handleFilter}
                        inputChange={handleChangeInput} />
                </div>
                <div className="repo-list">
                    <RepoItem repoList={repoList} />
                </div>
            </div>
        </div>
    );
}

export default RepoListView;