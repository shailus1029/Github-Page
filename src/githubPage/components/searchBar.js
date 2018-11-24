import React, {Component} from 'react';

 export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : "",
            filter : "All",
            language : "All",
            filterArr : ["All", "Fork", "Archived", "Mirrors"],
            languages : ["All", "HTML", "JavaScript", "CSS"],
            filterDropdown : false,
            languageDropdown : false
        }
    }

    onInputChange = (e) => {
        const text = e.target.value;
        this.setState({text});
        this.props.inputChange(text);
    }

    onButtonClick = (type) => {
        this.closeAllDropdown();
        this.setState({
            [type] : !this.state[type]
        })
    }

    closeAllDropdown = () => {
        this.setState({
            filterDropdown : false,
            languageDropdown : false
        })
    }

    clickDropdown = (filterType, filterItem) => {
        this.setState({
            [filterType] : filterItem
        })
        this.closeAllDropdown();
        this.props.dropdownSelect(filterType.toLowerCase(), filterItem.toLowerCase())
    }

    getDropdownList = (dropdownList, type) => {
        const self = this;
        return (
            <div className={`dropdown dropdown-${type}`}>
                <div className="select-header">Select {type}</div>
                {dropdownList.map((item, index) => {
                    return (
                    <div onClick={() => {self.clickDropdown(type, item)}} key={index} className={self.state[type].toLowerCase()==item.toLowerCase() ? "active list-item" : "list-item"}>
                        {self.state[type].toLowerCase()==item.toLowerCase() ?
                            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                            : ""
                        }
                        <span>{item}</span>
                    </div>)
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Find a repository..." 
                    value={this.state.text}
                    onChange={this.onInputChange}
                />
                <div className="dropBtn">
                    <button 
                        onClick={() => {this.onButtonClick("filterDropdown")}}
                    >
                        Type: <b>{this.state.filter}</b>
                    </button>
                    {this.state.filterDropdown 
                        ? this.getDropdownList(this.state.filterArr, 'filter')
                        : ""
                    }
                </div>
                <div className="dropBtn">
                    <button 
                        onClick={() => {this.onButtonClick("languageDropdown")}}
                    >
                        Language: <b>{this.state.language}</b>
                    </button>
                    {this.state.languageDropdown 
                        ? this.getDropdownList(this.state.languages, 'language')
                        : ""
                    }
                </div>
            </div>
        );
    }
}

export default SearchBar;