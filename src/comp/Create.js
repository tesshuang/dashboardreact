import React, { Component } from 'react';

class Create extends Component {
    constructor(props){
        super(props);
        
        this.state= {
            name:"",
            psw:"",
            email:""
        }
        
        this.submitUser = this.submitUser.bind(this);
        this.viewAllUser = this.viewAllUser.bind(this);
        this.inputName = this.inputName.bind(this);
        this.inputPsw = this.inputPsw.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.checkName = this.checkName.bind(this);
        this.checkPsw = this.checkPsw.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.savetoDb = this.savetoDb.bind(this);
    }
    
    submitUser(){
        this.checkName();
    }
    
    viewAllUser(){
        this.props.changeView(0);
    }
    
    inputName(evt){
        this.setState({
            name:evt.target.value
        })
    }
    inputPsw(evt){
        this.setState({
            psw:evt.target.value
        })
    }
    inputEmail(evt){
        this.setState({
            email:evt.target.value
        })
    }
    
    checkName(){
        
        if(this.state.name ==""){
            console.log('hi');
            alert("Error: Username can not be blank.");
            return false;
            
        }else{
            this.checkPsw();
            return true;   
        }
    }
    checkPsw(){
        var reg;
        if(this.state.psw !== ""){
            
            if(this.state.psw.length < 6){
                alert("Error: Password must contain at least six characters.");
                return false;
            }
            reg = /[0-9]/;    
            if(!reg.test(this.state.psw)){
                alert("Error: Password must contain at one number.");
                return false;
            }
            reg = /[A-Z]/;
            if(!reg.test(this.state.psw)){
                alert("Error: Password must contain at one uppercase.");
                return false;
            }
            reg = /[a-z]/;
            if(!reg.test(this.state.psw)){
                alert("Error: Password must contain at one lowercase.");
                return false;
            }
            this.checkEmail();
            return true;
        }else{
            console.log('hi2');
            alert("Error: Password can not be blank.");
            return false;
        }
        
    }
    checkEmail(){
        console.log('hi3');
        var reg;
        if(this.state.email !== ""){
            reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!reg.test(this.state.email)){
                alert("Error: Please enter a valid email.");
                return false;
            }
            /*this.setState({
               check:true 
            });*/
            this.savetoDb();
            this.props.changeView(0);
            return true;
        }else{
            alert("Error: Email can not be blank.");
            return false;
        }
    }
    
    savetoDb(){
        var fd = new FormData();
        fd.append("name", this.state.name);
        fd.append("password", this.state.psw);
        fd.append("email", this.state.email);
        
        fetch("http://**yourdatabaselink**/save.php",{
            method:"POST",
            body:fd
        });
        
    }
    render() {
        console.log(this.state.email.length, this.state.psw, this.state.name,this.state.check);
        return (
          <div>
            <input placeholder="name" type="text" onChange={this.inputName}/>
            <input placeholder="password" type="password" onChange={this.inputPsw}/>
            <p className="note">Passwords must contain at least six characters, including uppercase, lowercase letters and numbers.</p>
            <input placeholder="email" type="text" onChange={this.inputEmail}/>
            <button onClick={this.submitUser}>Submit</button>
            <button onClick={this.viewAllUser}>View all users</button>
          </div>
        );
    }
}

export default Create;
