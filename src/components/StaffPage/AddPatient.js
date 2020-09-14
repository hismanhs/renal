import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {createPatient} from '../actions/index'
import { connect } from 'react-redux';

import {SimpleTable} from '../Table'
const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

class AddPatient extends Component {
    constructor() {
        super()
         this.state = {
            name:"",
            contactnumber:null,
            age:''
            // dob:Date
         }
         this.handlename = this.handlename.bind(this);
         this.handlecontactnumber = this.handlecontactnumber.bind(this);
         this.handleage = this.handleage.bind(this);
        //  this.handledob=this.handledob.bind(this);
      }
      handlename = event => {
          this.setState({ name: event.target.value });
        };
        handlecontactnumber = event => {
            this.setState({ contactnumber: event.target.value });
          };
        handleage = event => {
          this.setState({ age: event.target.value });
        };
       
      render() {
        return (<div >
         <CssBaseline />
      <Container maxWidth="xs">
<br/>
<br/>
          
       <div>Add Patient</div>
<br/>
<br/>

      <ThemeProvider theme={theme}>
        <TextField label="Name" variant="outlined"
              type=""
              value={this.state.name}
              onChange={this.handlename} />
      </ThemeProvider>
      <br/>
      <br/>

      <ThemeProvider theme={theme}>
        <TextField label="   Contact Number " variant="outlined"
               value={this.state.contactnumber}
               onChange={this.handlecontactnumber} />
      </ThemeProvider>
      <br/>
      <br/>

      <ThemeProvider theme={theme}>
        <TextField label=" Age " variant="outlined"
             type="number"
             value={this.state.age}
             onChange={this.handleage} />
      </ThemeProvider>
   <br/>
   <br/>
   <ThemeProvider theme={theme}>
   <TextField
        id="date"
        label="Date of Birth"
        type="date"
        // onChange={this.handledob}
        // value={this.state.dob}
         defaultValue="1995-05-24"
      />
      </ThemeProvider>
      <br/>
      <br/>

      <Button variant="outlined" onClick={()=>{
        this.props.createPatient({name:this.state.name, 
          number: this.state.contactnumber, age: this.state.age})
      }}>Submit</Button>
      </Container>
      {this.props.patient && this.props.patient.length ? <div>
        Patient List: <br />
        </div> : null
      }
      <SimpleTable 
        header={['Patient Name', 'Phone No', 'Age']} 
        rows={this.props.patient} 
      />
        </div>);
      }
}



//read from redux state
const mapStateToProps = (state, ownProps) => {
  return {
    patient: state.patient || []
  }
};

//to write to redux state
const mapDispatchToProps = (dispatch) => {
  return {
    createPatient: contact => dispatch(createPatient(contact))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);
