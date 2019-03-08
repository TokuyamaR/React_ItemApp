import React, {Component} from 'react';
import '../App.css';
import ItemCreator from './components/ItemCreator'
import {ItemList} from './components/ItemList'

class App extends Component {
    render() {
        return (
            <div className="App">

                <ItemCreator/>
                <div className="searachBox">
                    <input type="text" className="searchBox__input js-search" value="" placeholder="Item Search"/>
                </div>

                <div className="itemList">
                    <ItemList/>
                </div>
            </div>
        );
    }
}

export default App;
