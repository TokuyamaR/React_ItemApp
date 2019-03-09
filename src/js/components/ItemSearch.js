import React from 'react';

export default class ItemSearch extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchVal: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            searchVal: e.target.value
        });
        this.props.callBackSearch(e.target.value);
    }
    render(){
        return (
            <div>
                <div className="search-title left">Search Item</div>
                <div className="searchBox">
                    <i className="fas fa-search icon-search searchBox__icon" aria-hidden="true"/>
                    <input type="text" className="searchBox__input" onChange={this.handleChange}
                    value={this.state.searchVal} placeholder='Type Search Word'/>
                </div>
            </div>
        );
    }
}