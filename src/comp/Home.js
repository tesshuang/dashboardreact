import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);

        this.createUser = this.createUser.bind(this);
        this.viewProfile = this.viewProfile.bind(this); 
        this.updateUser = this.updateUser.bind(this);
        this.removeUserDb = this.removeUserDb.bind(this);
    }
    componentDidMount(){
      console.log("mount");  
        fetch("http://**yourdatabaselink**/getinfo.php",{
            method:"GET"
        }).then((resp)=>{
            return resp.json();
        }).then((myobj)=>{
            console.log(myobj);
            this.props.updateTank(myobj);
        })
    }
    
    createUser(){
        this.props.changeView(1);
    }
    

    viewProfile(i){
        this.props.changeIndex(i);
        this.props.changeView(2); 
        
    }
    
    
    updateUser(){
        fetch("http://**yourdatabaselink**/getinfo.php",{
            method:"GET"
        }).then((resp)=>{
            return resp.json();
        }).then((myobj)=>{
            console.log(myobj);
            this.props.updateTank(myobj);
        })
        
    }
    
    removeUserDb(i){
        var fd = new FormData();
        fd.append("id", this.props.usertank[i].id);
        
        fetch("http://**yourdatabaselink**/removeuser.php",{
            method:"POST",
            body:fd
        });
        
        this.updateUser();
    }
    render() {
        var allUsers = this.props.usertank.map((obj,i)=>{
            return (
                    <tr key={i}>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.password}</td>
                        <td>{obj.email}</td>
                        <td><button onClick={this.viewProfile.bind(this,i)}>View Profile</button></td>
                        <td><button onClick={this.removeUserDb.bind(this,i)}>Remove</button></td>
                    </tr>
            )
        });
       
        return (
          <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers}
                </tbody>
            </table>
            <button onClick={this.createUser}>Create new user</button>
          </div>
        );
    }
}

export default Home;
