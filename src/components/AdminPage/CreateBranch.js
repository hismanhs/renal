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

class CreateBranch extends Component {
     
  
    constructor() {
        super()
         this.state =  {addtask: '', tasks:[ {branchname:"",
         amountperperson:""}]}

         this.addValue = this.addValue.bind(this);
        this.updateInput = this.updateInput.bind(this);
         this.handlebranchname = this.handledbranchname.bind(this);
         this.handleamountperperson = this.handleamountperperson.bind(this);
      }
      addValue(evt)
      {
        evt.preventDefault();
          
          let tasks = this.state.tasks;
          let addtask = this.state.addtask;
          tasks.push({branchname:addtask});
          this.setState({tasks:tasks});
      }
      updateInput(evt){
        this.setState({addtask: evt.target.value});       
          }
  

      handledbranchname = event => {
          this.setState({ branchname: event.target.value });
        };
        handleamountperperson = event => {
          this.setState({ amountperperson: event.target.value });
        };

        render() {
        return (<div >

        <h1>{this.state.value}</h1>
            <div>Add Branch</div>
            <br/>
            <br/>
      <ThemeProvider theme={theme}>
        <TextField label="Branch Name" variant="outlined"
              type=""
            //   value={this.state.branchname}
              onChange={this.updateInput} />
      </ThemeProvider>
      <br/>
      <br/>
      <ThemeProvider theme={theme}>
        <TextField label="Amount Per Person" variant="outlined"
              type=""
              value={this.state.amountperperson}
              onChange={this.handleamountperperson} />
      </ThemeProvider>
      <br/>
      <br/>
      <br/>

      <Button variant="outlined" onClick={this.addValue}>Submit</Button>

      <br/>
      <br/>
      <br/>
      <ul>
        {
        //map array data
        this.state.tasks.map(function(val){
          return <li key={val.branchname}>{val.branchname}</li>
        })
        }
        </ul>

      
        <div>{this.state.amountperperson}</div>

        </div>);
      }
}

export default CreateBranch;
