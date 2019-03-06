import React from 'react';
import ClassNames from 'classnames';

export default class Item extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                id: this.props.id,
                text: this.props.text,
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
    handleClickRemove(e){
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

}