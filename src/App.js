import React, { Component } from 'react';
import Home from './comp/Home';
import Create from './comp/Create';
import Profile from './comp/Profile';
import Edit from './comp/Edit';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            viewSwith:0,
            usertank:[],
            vindex:""
        }
        this.changeView = this.changeView.bind(this);
        this.updateTank = this.updateTank.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
    }
    
    updateTank(myobj){
        this.setState({
                usertank:myobj
            })
    }
    
    changeView(arg){
        this.setState({
            viewSwith:arg
        });
    }
    changeIndex(i){
        this.setState({
            vindex:i
        })
    }
    render() {
        console.log(this.state.vindex);
        var comp;
        if(this.state.viewSwith == 0){
            comp = <Home viewSwith={this.state.viewSwith}
                          changeView={this.changeView}
                          usertank={this.state.usertank}
                          updateTank={this.updateTank}
                          changeIndex={this.changeIndex}/>;
        } else if(this.state.viewSwith == 1){
            comp = <Create viewSwith={this.state.viewSwith}
                          changeView={this.changeView}/>;
        }else if(this.state.viewSwith == 2){
            comp = <Profile viewSwith={this.state.viewSwith}
                          changeView={this.changeView}
                          usertank={this.state.usertank}
                          vindex={this.state.vindex}/>;
        }else if(this.state.viewSwith == 3){
            comp = <Edit viewSwith={this.state.viewSwith}
                          changeView={this.changeView}
                          usertank={this.state.usertank}
                          vindex={this.state.vindex}/>;
        }
        return (
          <div className="App">
            {comp}
          </div>
        );
    }
}

export default App;
