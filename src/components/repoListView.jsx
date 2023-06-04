import React from 'react';
import Profile from './Profile';
import RepoItem from './RepoItem';
import SearchBar from './SearchBar.jsx';

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
            <div className="searchContainer mLR0">
                <input
                    type="text"
                    value={text}
                    className="main-input bg"
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
            <div className="flexContainer mLR0">
                <div className="profile flexQuater">
                    <Profile profileData={repo.profile} />
                </div>
                <div className="search-list-div flex3rdQuater">
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
        </div>
    );
}

export default RepoListView;