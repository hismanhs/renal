import React, { Component } from 'react';
import CreateStaff from './CreateStaff';
import CreateDoctor from './CreateDoctor';
import CreateBranch from './CreateBranch';
import EditData from './EditData';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar/NavBar';



// import './AdminPage.css';
      


class AdminPage extends Component {
  
  constructor() {
    super();
    this.state = {
      availableTabs: ['Create Branch', 'Create Doctor', 'Create Staff'],
      selectedTab: null,
      showMaintain: false
    };
    this.updateTab = this.updateTab.bind(this);
  }

  updateTab = (data) => {
    this.setState({selectedTab:data, showMaintain: false})
  }
  render() {
    return (
       <div >
        <NavBar />
         <div>
           <br/>
          <Button variant="outlined"
            type="" value="Search" onClick={() => this.setState({showMaintain:true})}
              >Maintain Data</Button> 
              </div>
              <br/>
              <br/>
              {this.state.availableTabs.map(item => {
                return <Button variant="outlined"
                          value={item} onClick={() => {
                            this.updateTab(item)}
                          }>{item}
                        </Button> 
              })}
              
              {this.state.showMaintain ? <EditData/>: null}
              {this.state.selectedTab === 'Create Branch' ? <CreateBranch/> : null}
              {this.state.selectedTab === 'Create Doctor' ? <CreateDoctor /> : null}
              {this.state.selectedTab === 'Create Staff' ? <CreateStaff/> : null}
      </div>

    );
  }
}

export default AdminPage;
