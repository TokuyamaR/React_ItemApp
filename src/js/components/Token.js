import React from "react";

export default class TokenInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            token:'',
            token_errMsg:''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        if(!this.state.token) {

            this.setState({
                token_errMsg:'tokenが入力されていません'
            });
            return;
        }
            this.setState({
                token: e.target.value
            });
    }

    render(){

        return(
            <input type="text" className="token" name="token" placeholder="token" value={this.state.token} onChange={this.handleChange}/>
        );
    }

}