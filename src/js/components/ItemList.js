import React from 'react';
import Item from './Item';
import _ from 'lodash';

//登録された商品リストを包括するコンポーネント
export class ItemList extends React.Component{
    constructor(props){
        super(props);
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
        });
    }
    render(){
        let items = [];
        for(let i in this.state.data){
            items.push(<Item key={this.state.data[i].id}
                             id={this.state.data[i].id}
                             name={this.state.data[i].name}
                             price={this.price.data[i].price}
                             text={this.state.data[i].text}
                             img={this.state.data[i].img}
            />);
        }

        return (
            <ul className="list js-item_list">
                {items}
            </ul>
        );
    }
}