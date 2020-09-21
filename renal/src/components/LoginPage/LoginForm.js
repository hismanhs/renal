import React, { Component } from 'react';
import { Panel, Form} from 'react-bootstrap';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SimpleAlert } from '../Alert' 
import {logIn} from '../actions/index'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'; 

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

class LoginForm extends Component {
     
  
  constructor() {
      super()
        this.state =  {
          username: '', 
          password:'',
          error: false
        }

        this.handleusername = this.handleusername.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      
    }
    handleusername = event => {
      this.setState({ username: event.target.value });
    };

    handlepassword= event => {
      this.setState({ password: event.target.value });
    };

    handleFormSubmit = () => {
      this.props.logIn(this.state.username)
      
    }

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="LoginForm" id="loginForm">
            <TextField label= "User Name " variant="outlined"
              error={this.state.error}
              helperText={this.state.error ? 'Invalid username or password' : ''}
              type="text"
              value={this.state.username}
              onChange={this.handleusername }/>
           <br/>
           <br/>

            <TextField label= "Password " variant="outlined"
              error={this.state.error}
              helperText={this.state.error ? 'Invalid username or password' : ''}
              type="password"
              value={this.state.password}
              onChange={this.handlepassword }/>
           <br/>
           <br/>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={()=>{
          if(this.state.username.toLowerCase()==='admin')
          {
            this.handleFormSubmit()
            //return window.location.href= '/admin'
            this.props.history.push('/admin');
          }
          else if(this.state.username.toLowerCase()==='doctor')
          {
            this.handleFormSubmit()
            return window.location.href= '/doctorlogin'
          }
          else if(this.state.username.toLowerCase()==='staff')
          {
            this.handleFormSubmit()
            return window.location.href= '/stafflogin'
          }
          else
          {
            this.setState({error:true})
          }
          //if condition
          //check if logged in then call below 
          //else call logout 
          //window.location.href= '/login'
          
        }}
      >
        Login
      </Button>
            {/* <SimpleAlert errorMessage={'Invalid Login'}/> */}
            </Form>
        </Panel>
      </div>
    )
  }
}

//read from redux state
const mapStateToProps = (state, ownProps) => {
  return {
    // patient: state.patient || []
  }
};

//to write to redux state
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: user => dispatch(logIn(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));


