import React from 'react';

export default class Item extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                id: this.props.id,
                name: this.props.name,
                price: this.props.price,
                text: this.props.text,
                img: this.props.img,
                editMode: false
            };
            this.handleClickRemove = this.handleClickRemove.bind(this);
            this.handleClickShowEdit = this.handleClickShowEdit.bind(this);
            this.handleClickCloseEdit = this.handleClickCloseEdit.bind(this);
            this.handleChangeName = this.handleChangeName.bind(this);
            this.handleChangePrice = this.handleChangePrice.bind(this);
            this.handleChangeText = this.handleChangeText.bind(this);
            this.handleChangeImg = this.handleChangeImg.bind(this);
    }
    handleChangeName(e){
        this.setState({
            name:e.target.value
        });
    }
    handleChangePrice(e){
        this.setState({
            price:e.target.value
        });
    }
    handleChangeText(e){
        this.setState({
            text:e.target.value
        });
    }
    handleChangeImg(e){
        this.setState({
            img:e.target.value
        });
    }
    handleClickRemove(){
        this.props.onRemove(this.state.id);
    }
    handleClickShowEdit(){
        this.setState({
            editMode:true
        });
    }
    handleClickCloseEdit(e){
        this.setState({
            name:e.currentTarget.value,
            price: e.currentTarget.value,
            text: e.currentTarget.value,
            img: e.currentTarget.value,
            editMode: false
        });
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    // 編集可能か否かで入力欄の状態を変化させる
    render() {
        const inputName = (this.state.editMode) ?
            <input type="text" className="editName" value={this.state.name}
                   onChange={this.handleChangeName}/> :
            // 編集ボタンをクリックすると編集可能にするが、うまく動かない場合は調整
            <span className="name">{this.state.name}</span>;
        const inputPrice = (this.state.editMode) ?
            <input type="text" className="editPrice" value={this.state.price}
                   onChange={this.handleChangePrice}/> :
            <span className="price">{this.state.price}</span>;
        const inputText = (this.state.editMode) ?
            <textarea cols="30" rows="10" className="text" value={this.state.text}
                      onChange={this.handleChangeText}/> :
            <span className="text">{this.state.price}</span>;
        const inputImg = (this.state.editMode) ?
            <input type="file" className="editImg" value={this.state.img}
                   onChange={this.handleChangeImg}/> :
            <img className="img" src={this.state.img} alt="商品画像"/>;

        return (
            <li className="list__item">
                {inputName}
                {inputPrice}
                {inputText}
                {inputImg}
                <i className="fas fa-edit icon-edit" onClick={this.handleClickShowEdit} aria-hidden="true"/>
                <i className="fa fa-trash icon-trash" onClick={this.handleClickRemove} aria-hidden="true"/>
            </li>
        );
    }
}