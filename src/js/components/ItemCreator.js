import React from 'react';

export default class ItemCreator extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            data:{
                name: '',
                price:'',
                text: '',
                img: '',
            },
            token:'',
            errMsg:''
        };
        // this.handleChangeName = this.handleChangeName.bind(this);
        // this.handleChangePrice = this.handleChangePrice.bind(this);
        // this.handleChangeText = this.handleChangeText.bind(this);
        // this.handleChangeImg = this.handleChangeImg.bind(this);
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
            case 'img':
                data.img = e.target.value;
                break;
        }

        this.setState({
            data: data
        });
    }

    // 項目ごとにstateをセットしたパターン
    // handleChangeName(e){
    //     this.setState({
    //         name: e.target.value
    //     });
    // }
    //
    // handleChangePrice(e){
    //     this.setState({
    //         price: e.target.value
    //     });
    // }
    // handleChangeText(e){
    //     this.setState({
    //         text: e.target.value
    //     });
    // }
    // handleChangeImg(e){
    //     this.setState({
    //         img: e.target.value
    //     });
    // }

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
        const imgVal = this.state.data.img;
        if(!(nameVal && priceVal && textVal && imgVal)){
            this.setState({
                errMsg: '未入力の項目があります'
            });
            return;
        }

        this.setState({
                name: '',
                price:'',
                text: '',
                img: '',
            errMsg:''
        });
        this.props.callBackAddItem(nameVal, priceVal, textVal, imgVal);
    }

    render(){
        const errMsg = (this.state.errMsg) ? <span className="error">{this.state.errMsg}</span> : '';

        return (
          <div>
              {/*tokenは仮設置*/}
              <div className="token-title left">Token</div>
              <input type="text" className="inputToken js-get-tokenVal"  name="token" value="" placeholder="Token" onChange={this.handleChangeToken}/>
              <form className="form">
                  <div className="inputArea">
                      <div className="creator-title left">Create Item</div>
                      <input type="text" className="inputText js-get-nameVal" name="name" value={this.state.name} placeholder="Item Name" onChange={this.handleChange}/>
                      <input type="text" className="inputText js-get-priceVal" name="price" value={this.state.price} placeholder="Item Price" onChange={this.handleChange}/>
                      <textarea className="inputText textarea js-get-textVal" name="text" value={this.state.text} placeholder="Item Text" onChange={this.handleChange}/>
                      <input type="file" ref="file" className="inputFile js-get-fileVal" name="img" value={this.state.img} onChange={this.handleChange}/>
                      {errMsg}
                  <input className="btn js-submit" type="submit" value="Submit" onClick={this.handleSubmit}/>
                  </div>
              </form>
          </div>
        );
    }
}