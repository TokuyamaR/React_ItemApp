import React from 'react';
import Token from './Token';

export default class ItemCreator extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            data:{
                name: '',
                price:'',
                text: '',
                file: '',
            },
            token:'',
            errMsg:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeToken = this.handleChangeToken.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            case 'file':
                data.file = e.target.files[0];
                break;
            default:
                break;
        }

        this.setState({
            data: data
        });
    }

    handleChangeToken(e){
        this.setState({
            token: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        const nameVal = this.state.data.name;
        const priceVal = this.state.data.price;
        const textVal = this.state.data.text;
        const fileVal = this.state.data.file;
        if(!(nameVal && priceVal && textVal && fileVal)){
            this.setState({
                errMsg: '未入力の項目があります'
            });
            return;
        }

        this.setState({

            data: {
                name: '',
                price: '',
                text: '',
                file: ''
            },
            errMsg:''
        });
        this.props.callBackAddItem(nameVal, priceVal, textVal, fileVal);
    }

    render(){
        const errMsg = (this.state.errMsg) ? <span className="error">{this.state.errMsg}</span> : '';

        return (
          <div>
              {/*tokenは課題2まで仮設置*/}
              <div className="token-title left">Token</div>
              {/*<input type="text" className="inputToken js-get-tokenVal"  name="token" value="" placeholder="Token" onChange={this.handleChangeToken}/>*/}
              <Token/>
              <form className="form">
                  <div className="inputArea">
                      <div className="creator-title left">Create Item</div>
                      <input type="text" className="inputText js-get-nameVal" name="name" value={this.state.data.name} placeholder="Item Name" onChange={this.handleChange}/>
                      <input type="text" className="inputText js-get-priceVal" name="price" value={this.state.data.price} placeholder="Item Price" onChange={this.handleChange}/>
                      <textarea className="inputText textarea js-get-textVal" name="text" value={this.state.data.text} placeholder="Item Text" onChange={this.handleChange}/>
                      <input type="file" className="inputFile js-get-fileVal" name="file" onChange={this.handleChange}/>
                      {errMsg}
                  <input className="btn js-submit" type="submit" value="Submit" onClick={this.handleSubmit}/>
                  </div>
              </form>
          </div>
        );
    }
}