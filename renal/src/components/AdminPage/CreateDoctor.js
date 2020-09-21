import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

class CreateDoctor extends Component {
    constructor() {
        super()
         this.state = {
  doctorname:"",
  doctorpassword:"",
  email:"",
  phonenumber:8807716641
         }
         this.handledoctorname = this.handledoctorname.bind(this);
         this.handledoctorpassword = this.handledoctorpassword.bind(this);
         this.handleemail = this.handleemail.bind(this);
         this.handlephonenumber = this.handlephonenumber.bind(this);
      }
      handledoctorname = event => {
          this.setState({ doctorname: event.target.value });
        };
        handledoctorpassword = event => {
          this.setState({ doctorpassword: event.target.value });
        };
        handleemail = event => {
          this.setState({ email: event.target.value });
        };
        handlephonenumber = event => {
          this.setState({ phonenumber: event.target.value });
        };
      render() {
        return (<div >
            <br/>
            <div>Add Doctor</div>
            <br/>

      <ThemeProvider theme={theme}>
        <TextField label="Doctor Name" variant="outlined"
              type=""
              value={this.state.doctorname}
              onChange={this.handledoctorname} />
      </ThemeProvider>
      <br/>
      <br/>
      <ThemeProvider theme={theme}>
        <TextField label="Create Password" variant="outlined"
              type="password"
              value={this.state.doctorpassword}
              onChange={this.handledoctorpassword} />
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
        <TextField label= "Phone Number " variant="outlined"
         type=""
         value={this.state.phonenumber}
         onChange={this.handlephonenumber} />
      </ThemeProvider>
      <br/>
      <br/>

      <Button variant="outlined">Submit</Button>

        </div>);
      }
}

export default CreateDoctor;
