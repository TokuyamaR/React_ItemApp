import React from 'react';

export default class ItemCreator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            price:'',
            text: '',
            img: '',
            errMsg:''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeImg = this.handleChangeImg.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeName(name){
        this.setState({
            name: name.target.value
        });
    }

    handleChangePrice(price){
        this.setState({
            price: price.target.value
        });
    }
    handleChangeText(text){
        this.setState({
            text: text.target.value
        });
    }
    handleChangeImg(img){
        this.setState({
            img: img.target.value
        });
    }

    handleClick(name,price,text,img){

        const nameVal = name.target.value;
        const priceVal = price.target.value;
        const textVal = text.target.value;
        const imgVal = img.target.value;
        if(!(nameVal && priceVal && textVal && imgVal)){
            this.setState({
                errMsg: '未入力の項目があります'
            });
            return;
        }

        this.setState({
            name:'',
            price: '',
            text:'',
            img:'',
            errMsg:''
        });
        this.props.callBackAddItem(val);
    }

    render(){
        const errMsg = (this.state.errMsg) ? <span className="error">{this.state.errMsg}</span> : '';

        return (
          <div className="form">
              <div className="inputArea">
                  {/*tokenは仮設置*/}
                  <input type="text" className="inputToken js-get-tokenVal" value="" placeholder="Token"/>
                  <input type="text" className="inputText js-get-nameVal" value={this.state.name} placeholder="Item Name"/>
                  <input type="text" className="inputText js-get-priceVal" value={this.state.price} placeholder="Item Price"/>
                  <textarea className="inputText textarea js-get-textVal" value={this.state.text} placeholder="Item Text"/>
                  <input type="file" ref="file" className="inputFile js-get-fileVal" value={this.state.img}/>
                  {errMsg}
                  <input type="submit" value="Submit"/>
              </div>
          </div>
        );
    }
}