import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { green } from "@material-ui/core/colors";
import {createStaff} from '../actions/index'
import { connect } from 'react-redux';
import {SimpleTable} from '../Table'



const theme = createMuiTheme({
  palette: {
    primary: green
  }
});
class CreateStaff extends Component {
    constructor() {
        super()
         this.state = {
  username:"",
  email:"",
  password:"",
  phonenumber:8807716641,
  branch:""
         }
         this.handleusername = this.handleusername.bind(this);
         this.handleemail = this.handleemail.bind(this);
         this.handlepassword = this.handlepassword.bind(this);
         this.handlephonenumber = this.handlephonenumber.bind(this);
         this.handlebranch = this.handlebranch.bind(this);

      }
      handleusername = event => {
          this.setState({ username: event.target.value });
        };
        handleemail = event => {
          this.setState({ email: event.target.value });
        };
        handlepassword = event => {
          this.setState({ password: event.target.value });
        };
        handlephonenumber = event => {
          this.setState({ phonenumber: event.target.value });
        };

        handlebranch = event => {
        this.setState({ username: event.target.value });
      };
     
      render() {
        return (<div >
            <br/>
          <div>Add Staff</div>
          <br/>
          <ThemeProvider theme={theme}>
        <TextField label="User Name" variant="outlined"
         type=""
         value={this.state.username}
         onChange={this.handleusername} />
      </ThemeProvider>
   <br/>
   <br/>

   <ThemeProvider theme={theme}>
        <TextField label="Email" variant="outlined"
         type=""
         value={this.state.email}
         onChange={this.handleemail} />
      </ThemeProvider>
   <br/>
   <br/>

   <ThemeProvider theme={theme}>
        <TextField label="Password" variant="outlined"
         type=""
         value={this.state.HospitalName}
              onChange={this.handlepassword} />
      </ThemeProvider>
   <br/>
   <br/>

   <ThemeProvider theme={theme}>
        <TextField label= "Phone Number " variant="outlined"
         type=""
         value={this.state.phonenumber}
         onChange={this.handlephonenumber} />
      </ThemeProvider>
      <br/>
      <br/>

      <ThemeProvider theme={theme}>
        <TextField label="Branch Name" variant="outlined"
         type=""
         value={this.state.branch}
         onChange={this.handlebranch} />
      </ThemeProvider>

      <br/>
      <br/>
      <Button variant="outlined" onClick={()=>{
        this.props.createStaff({username: this.state.username, 
          email: this.state.email, phonenumber: this.state.phonenumber})
      }}>Submit</Button>
      {this.props.staff && this.props.staff.length ? <div>
        Staff List: <br />
        </div> : null
      }
      <SimpleTable 
        header={['Staff Name', 'Email', 'Phone No', 'Branch']} 
        rows={this.props.staff} 
      />

        </div>);
      }
}

//read from redux state
const mapStateToProps = (state, ownProps) => {
  return {
    staff: state.staff || []
  }
};

//to write to redux state
const mapDispatchToProps = (dispatch) => {
  return {
    createStaff: contact => dispatch(createStaff(contact))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStaff);
