import React, {Component} from 'react';
import '../App.css';
import {ItemList} from './components/ItemList'

class App extends Component {
    render() {
        return (
            <div className="App">

                <form className="form">
                    <div className="inputArea">
                        <input type="text" className="inputToken js-get-tokenVal" value="" placeholder="Token"/>
                        <input type="text" className="inputText js-get-nameVal" value="" placeholder="Item Name"/>
                        <input type="text" className="inputText js-get-priceVal" value="" placeholder="Item Price"/>
                        <textarea className="inputText textarea js-get-textVal" value="" placeholder="Item Text"/>
                        <input type="file" ref="file" className="inputFile js-get-fileVal" value=""/>
                        <span className="error js-toggle-error">Not Input</span>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
                <div className="searachBox">
                    <input type="text" className="searchBox__input js-search" value="" placeholder="Item Search"/>
                </div>

                <div className="itemList">
                    <ul className="list js-item_list">
                        <li className="list__item">
                            <span className="img">商品画像</span>
                            <span className="name">商品名</span>
                            <span className="price">価格</span>
                            <span className="text">説明文</span>
                            <i className="fas fa-edit icon-edit"/>
                            <i className="fa fa-trash icon-trash"/>
                        </li>
                    </ul>
                </div>
                <ItemList/>
            </div>
        );
    }
}

export default App;
