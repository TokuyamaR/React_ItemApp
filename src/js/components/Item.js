import React from 'react';
import ClassNames from 'classnames';

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
            this.handleChange = this.handleChange.bind(this);
            this.handleClickRemove = this.handleClickRemove.bind(this);
            this.handleClickShowEdit = this.handleClickShowEdit.bind(this);
            this.handleClickCloseEdit = this.handleClickCloseEdit.bind(this);
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
    handleClickRemove(){
        this.props.onRemove(this.state.data.id);
    }
    handleClickShowEdit(){
        this.setState({
            editMode:true
        });
    }
    handleClickCloseEdit(e){
        e.preventDefault();

        const nameVal = this.state.data.name;
        const priceVal = this.state.data.price;
        const textVal = this.state.data.text;
        const imgVal = this.state.data.img;
        if(!(nameVal && priceVal && textVal && imgVal)){
            this.setState({
                errMsg: '未入力の項目があります'
            });
            return;
        }

        this.setState({
            name: nameVal,
            price:priceVal,
            text: textVal,
            img: imgVal,
            errMsg:'',
            editMode: false
        });
        // this.setState({
        //     data: {
        //         name: e.currentTarget.value,
        //         price: e.currentTarget.value,
        //         text: e.currentTarget.value,
        //         img: e.currentTarget.value,
        //     },
        //     editMode: false
        // });
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    // 編集可能か否かで入力欄の状態を変化させる
    render() {
        const inputName = (this.state.editMode) ?
            <input type="text" className="edit editName" name="name" value={this.state.data.name}
                   onChange={this.handleChange}/> :
            // 編集ボタンをクリックすると編集可能にするが、うまく動かない場合は調整
            <span className="name">{this.state.data.name}</span>;
        const inputPrice = (this.state.editMode) ?
            <input type="text" className="edit editPrice" name="price" value={this.state.data.price}
                   onChange={this.handleChange}/> :
            <span className="price">{this.state.data.price}</span>;
        const inputText = (this.state.editMode) ?
            <textarea cols="30" rows="10" className="edit editText" name="text" value={this.state.data.text}
                      onChange={this.handleChange}/> :
            <span className="text">{this.state.data.text}</span>;
        const inputImg = (this.state.editMode) ?
            <input type="file" className="edit editImg" name="img"
                   onChange={this.handleChange}/> :
            <img className="img" src={this.state.data.img} alt="商品画像"/>;

        const classNameBtn = ClassNames({
            'btn close-btn--none': !this.state.editMode,
            'btn close-btn': this.state.editMode
        });

        const classNameIconTrash = ClassNames({
            'fa fa-trash icon-trash': !this.state.editMode,
            'fa fa-trash icon-trash--none': this.state.editMode
        });

        const classNameIconEdit = ClassNames({
            'fas fa-edit icon-edit': !this.state.editMode,
            'fas fa-edit icon-edit--none': this.state.editMode
        });

        return (
            <form action="" className="form">
                <li className="list__item">
                    {inputName}
                    {inputPrice}
                    {inputText}
                    {inputImg}
                    <input type='submit' value='Done' className={classNameBtn} onClick={this.handleClickCloseEdit}/>
                    <i className={classNameIconTrash} onClick={this.handleClickRemove} aria-hidden="true"/>
                    <i className={classNameIconEdit} onClick={this.handleClickShowEdit} aria-hidden="true"/>
                </li>
            </form>
        );
    }
}