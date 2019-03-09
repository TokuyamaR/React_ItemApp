import React from 'react';

export default class Item extends React.Component{
    constructor(props){
        super(props);
            this.state = {

                data: {
                    id: this.props.id,
                    name: this.props.name,
                    price: this.props.price,
                    text: this.props.text,
                    img: this.props.img,
                },
                editMode: false
            };
            this.handleClickRemove = this.handleClickRemove.bind(this);
            this.handleClickShowEdit = this.handleClickShowEdit.bind(this);
            this.handleClickCloseEdit = this.handleClickCloseEdit.bind(this);
            this.handleChange = this.handleChange.bind(this);
            // this.handleChangeName = this.handleChangeName.bind(this);
            // this.handleChangePrice = this.handleChangePrice.bind(this);
            // this.handleChangeText = this.handleChangeText.bind(this);
            // this.handleChangeImg = this.handleChangeImg.bind(this);
    }
    handleChange(e){

        let data = this.state.data;

        switch(e.target.name){
            case 'name':
                data.name = e.target.value;
                break;
            case 'price':
                data.price = e.target.value;
                break;
            case 'text':
                data.text = e.target.value;
                break;
            case 'img':
                data.img = e.target.value;
                break;
        }

        this.setState({
            data: data
        });
    }
    // handleChangeName(e){
    //     this.setState({
    //         name:e.target.value
    //     });
    // }
    // handleChangePrice(e){
    //     this.setState({
    //         price:e.target.value
    //     });
    // }
    // handleChangeText(e){
    //     this.setState({
    //         text:e.target.value
    //     });
    // }
    // handleChangeImg(e){
    //     this.setState({
    //         img:e.target.value
    //     });
    // }
    handleClickRemove(e){
        this.props.onRemove(this.state.data.id);
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
            <input type="text" className="editName" name="name" value={this.state.data.name}
                   onChange={this.handleChange}/> :
            // 編集ボタンをクリックすると編集可能にするが、うまく動かない場合は調整
            <span className="name">{this.state.data.name}</span>;
        const inputPrice = (this.state.editMode) ?
            <input type="text" className="editPrice" name="price" value={this.state.data.price}
                   onChange={this.handleChange}/> :
            <span className="price">{this.state.data.price}</span>;
        const inputText = (this.state.editMode) ?
            <textarea cols="30" rows="10" className="editText" name="text" value={this.state.data.text}
                      onChange={this.handleChange}/> :
            <span className="text">{this.state.data.text}</span>;
        const inputImg = (this.state.editMode) ?
            <input type="file" className="editImg" name="img" value={this.state.data.img}
                   onChange={this.handleChange}/> :
            <img className="img" src={this.state.data.img} alt="商品画像"/>;

        return (
            <li className="list__item">
                {inputName}
                {inputPrice}
                {inputText}
                {inputImg}
                <i className="fa fa-trash icon-trash" onClick={this.handleClickRemove} aria-hidden="true"/>
                <i className="fas fa-edit icon-edit" onClick={this.handleClickShowEdit} aria-hidden="true"/>
            </li>
        );
    }
}