import React from 'react';
import Item from './Item';

//登録された商品リストを包括するコンポーネント
export class ItemList extends React.Component{
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(id){
        this.props.callBackRemoveItem(id);
    }

    render(){
        let items = [];
        for(let i in this.props.data){
            items.push(<Item key={this.props.data[i].id}
                             id={this.props.data[i].id}
                             name={this.props.data[i].name}
                             price={this.props.data[i].price}
                             text={this.props.data[i].text}
                             file={this.props.data[i].file} onRemove={this.handleRemove}
            />);
        }

        return (
            <div className="itemList">
                <div className="item_list-title left">Item List</div>

                <ul className="list js-item_list">
                    {items}
                </ul>
            </div>
        );
    }
}