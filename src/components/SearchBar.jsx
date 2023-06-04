import React, { useState, memo } from 'react';

const filterArr = ["All", "Fork", "Archived", "Mirrors"];
const languages = ["All", "HTML", "JavaScript", "CSS"];

const SearchBar = (props) => {
    const [text, setText] = useState('');
    const [filter, setFilter] = useState('All');
    const [language, setLanguage] = useState('All');
    const [filterDropdown, setFilterDropdown] = useState(false);
    const [languageDropdown, setLanguageDropdown] = useState(false);

    const { inputChange, dropdownSelect } = props;

    const handleInputChange = (event) => {
        setText(event.target.value);
        inputChange(event.target.value);
    }

    const handleButtonClick = (type) => {
        if (type === "filterDropdown") {
            setFilterDropdown(!filterDropdown);
        } else {
            setLanguageDropdown(!languageDropdown)
        }
    }

    const closeAllDropdown = () => {
        setFilterDropdown(false);
        setLanguageDropdown(false);
    }

    const clickDropdown = (filterType, filterItem) => {
        if (filterType === "filter") {
            setFilter(filterItem);
        } else {
            setLanguage(filterItem);
        }
        dropdownSelect(filterType.toLowerCase(), filterItem.toLowerCase())
        closeAllDropdown();

    }

    const getDropdownList = (dropdownList, type) => {
        return (
            <div className={`dropdown dropdown-${type}`}>
                <div className="select-header">Select {type}</div>
                {dropdownList.length > 0 && dropdownList.map((item, index) => {
                    return (
                        <div onClick={() => { clickDropdown(type, item) }} key={index} className={type.toLowerCase() === item.toLowerCase() ? "active list-item" : "list-item"}>
                            {type.toLowerCase() === item.toLowerCase() ?
                                <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                : ""
                            }
                            <span>{item}</span>
                        </div>)
                })}
            </div>
        )
    }

    return (
        <div className='searchConatainer'>
            <input
                type="text"
                value={text}
                className="search-input bg"
                onChange={handleInputChange}
                placeholder="Find a repository..."
            />
            <div className="dropBtn buttonBg">
                <button
                    className="buttonBg"
                    onClick={() => handleButtonClick("filterDropdown")}
                >
                    Type: <b>{filter}</b>
                </button>
                {filterDropdown && getDropdownList(filterArr, 'filter')}
            </div>
            <div className="dropBtn">
                <button
                    className="buttonBg"
                    onClick={() => handleButtonClick("languageDropdown")}
                >
                    Language: <b>{language}</b>
                </button>
                {languageDropdown && getDropdownList(languages, 'language')}
            </div>
        </div>
    );
}

export default memo(SearchBar);