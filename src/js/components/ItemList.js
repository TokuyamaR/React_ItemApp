import React from 'react';
import Item from './Item'
import _ from 'lodash'

//登録された商品リストを包括するコンポーネント
export class ItemList extends React.Component{
    constructor(props){
        super(prosp);
        this.state = {
            data: [
                {
                    id: 0,
                    name: 'sample item1',
                    price: 100,
                    text:'sample1',
                    img:'img1'
                },
                {
                    id: 1,
                    name: 'sample item2',
                    price: 200,
                    text:'sample2',
                    img:'img2'
                }
            ]
        };
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(id){
        let data = _.reject(this.state.data,{'id':id});
        this.setState({
            data: data
        })
    }
    render(){
        let items = [];
        for(let i in this.state.data){
            items.push()
        }

        return (
            <ul className="list js-item_list">
                {items}
            </ul>
        )
    }
}