import React, { Component } from 'react';
import CreateStaff from './CreateStaff';
import CreateDoctor from './CreateDoctor';
import CreateBranch from './CreateBranch';
import EditData from './EditData';
import Button from '@material-ui/core/Button';


// import './AdminPage.css';
      


class AdminPage extends Component {
  
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false,
     showdatatable: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;

        case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;

        case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        break;
 case "showdatatable":
         this.setState({showdatatable: !this.state.showdatatable});
         break;

        default:
        null;
    }
  }

  render() {
    const {showHideDemo1, showHideDemo2, showHideDemo3,showdatatable } = this.state;

    return (
       <div ><div>
     <Button variant="outlined"
      type="" value="Search" onClick={() => this.hideComponent("showdatatable")}
         >Remove Candidate</Button> 
         </div>
         <br/>
         <br/>

        <Button variant="outlined"
        type="" value="Search" onClick={() => this.hideComponent("showHideDemo1")}
        >Create Branch</Button>
          <Button variant="outlined"
        type="" value="Search" onClick={() => this.hideComponent("showHideDemo2")}
        >Create Doctor</Button>
        <Button variant="outlined"
        type="" value="Search" onClick={() => this.hideComponent("showHideDemo3")}
        >Create Staff</Button>
        {/* </div> */}
        {showdatatable && <EditData/>}  
        {showHideDemo1 && <CreateBranch/>}
        {showHideDemo2 && <CreateDoctor />}
        {showHideDemo3 && <CreateStaff/>}

      </div>

    );
  }
}

export default AdminPage;
