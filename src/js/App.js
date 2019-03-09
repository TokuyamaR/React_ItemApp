import React from 'react';
import ItemCreator from './components/ItemCreator';
import ItemSearch from './components/ItemSearch';
import {ItemList} from './components/ItemList';
import _ from 'lodash';
import '../css/item.css'

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            data: [
                {
                    id: this.createHashId(),
                    name: 'sample item1',
                    price: 100,
                    text: 'sample1',
                    img: 'img1'
                },
                {
                    id: this.createHashId(),
                    name: 'sample item2',
                    price: 200,
                    text: 'sample2',
                    img: 'img2'
                }
            ],
            searchText: ''
        };

        this.callBackRemoveItem = this.callBackRemoveItem.bind(this);
        this.callBackAddItem = this.callBackAddItem.bind(this);
        this.callBackSearch = this.callBackSearch.bind(this);
        this.filterCollection = this.filterCollection.bind(this);
    }

    createHashId(){
        return Math.random().toString(36).slice(-16);
    }

    callBackSearch(searchVal){
        this.setState({
            searchText: searchVal
        });
    }

    callBackRemoveItem(id){
        let data = _.reject(this.state.data, {'id': id});
        this.setState({
            data: data
        });
    }


    callBackAddItem(name, price, text, img){
        let nextData = this.state.data;
        nextData.push({id: this.createHashId(), name: name, price: price, text: text, img: img});
        this.setState({
            data: nextData
        });
    }

    filterCollection(elm){
        const regexp = new RegExp('^' + this.state.searchText, 'i');
        return (elm.name.match(regexp));
    }

    render() {

        const data = (this.state.searchText) ? this.state.data.filter(this.filterCollection) : this.state.data;

        return (
            <div className="main">
                <h1 className="mainTitle">React App</h1>
                <div className="app">

                    <ItemCreator callBackAddItem={this.callBackAddItem}/>

                    <ItemSearch callBackSearch={this.callBackSearch}/>

                    <ItemList data={data} callBackRemoveItem={this.callBackRemoveItem}/>
                </div>
            </div>
        );
    }
}

export default App;
