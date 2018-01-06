import React, { Component } from 'react';

class Profile extends Component {
    constructor(props){
        super(props);
        
        this.viewAllUser = this.viewAllUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }
    
    viewAllUser(){
        this.props.changeView(0);
    }
    editUser(){
        this.props.changeView(3);
    }
    render() {
        console.log(this.props.usertank[this.props.vindex]);
        var singleuser = this.props.usertank[this.props.vindex];
        return (
          <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{singleuser.id} </td>
                        <td>{singleuser.name} </td>
                        <td>{singleuser.password} </td>
                        <td>{singleuser.email} </td>
                        <td><button onClick={this.editUser}>Edit Profile</button></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={this.viewAllUser}>View All Users</button>
          </div>
        );
    }
}

export default Profile;
