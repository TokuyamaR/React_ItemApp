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
                    file: this.props.file,
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
        let createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

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
            case 'file':
                let files = e.target.files;
                let image_url = files.length===0 ? "" : createObjectURL(files[0]);
                data.file = image_url;
                break;
            default:
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
        const fileVal = this.state.data.file;
        if(!(nameVal && priceVal && textVal && fileVal)){
            this.setState({
                editMode: false,
                errMsg: '未入力の項目があります'
            });
            return;
        }

        this.setState({

            data: {
                id: this.props.id,
                name: nameVal,
                price: priceVal,
                text: textVal,
                file: fileVal
            },
            errMsg:'',
            editMode: false
        });
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    // 編集可能か否かで入力欄の状態を変化させる
    render() {

        let fileMsg = (this.state.data.file) ? "選択済み" : "未選択";

        const inputName = (this.state.editMode) ?
            <input type="text" className="edit edit-name" name="name" value={this.state.data.name}
                   placeholder='name' onChange={this.handleChange}/> :
            <span className="name">{this.state.data.name}</span>;
        const inputPrice = (this.state.editMode) ?
            <input type="text" className="edit edit-price" name="price" value={this.state.data.price}
                   placeholder='price' onChange={this.handleChange}/> :
            <span className="price">{this.state.data.price}</span>;
        const inputText = (this.state.editMode) ?
            <textarea cols="30" rows="10" className="edit edit-text" name="text" value={this.state.data.text}
                      placeholder='text' onChange={this.handleChange}/> :
            <span className="text">{this.state.data.text}</span>;
        const inputFile = (this.state.editMode) ?
            <div className="itemColumn">
                <img className="file" src={this.state.data.file} alt="商品画像"/>
                <div className="file-container">
                    <div className="file-form">
                        画像登録
                        <input type="file" className="edit edit-file" name="file" onChange={this.handleChange}/>
                    </div>
                    <span className="file-msg">{fileMsg}</span>
                </div>
            </div> :
            <img className="file" src={this.state.data.file} alt="商品画像"/>;

        const classNameBtn = ClassNames({
            'btn close-btn--none': !this.state.editMode,
            'btn close-btn': this.state.editMode
        });

        const classNameIconTrash = ClassNames({
            'fa fa-trash icon-trash': !this.state.editMode,
            'fa fa-trash icon-trash--none': this.state.editMode
        });

        const classNameIconEdit = ClassNames({
            'fas fa-lg fa-edit icon-edit': !this.state.editMode,
            'fas fa-lg fa-edit icon-edit--none': this.state.editMode
        });

        return (
            <form action="" className="form">
                <li className="list__item">
                    <div className='item-flex'>
                        {inputFile}
                        <div className='item-column'>
                            {inputName}
                            {inputPrice}
                            {inputText}
                        </div>
                    </div>
                    <input type='submit' value='Done' className={classNameBtn} onClick={this.handleClickCloseEdit}/>
                    <i className={classNameIconTrash} onClick={this.handleClickRemove} aria-hidden="true"/>
                    <i className={classNameIconEdit} onClick={this.handleClickShowEdit} aria-hidden="true"/>
                </li>
            </form>
        );
    }
}