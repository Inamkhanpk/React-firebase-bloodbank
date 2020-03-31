import React,{Component}  from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {connect}  from 'react-redux';
import DonorMiddleware from './../store/middleware/donorMiddleware';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import App from './App';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';




const styles = () => ({
   paperSize:{
     width:500,
     height:450,
     position :"relative",
     top:150,
     left:350,
     padding:10
   },
   side:{
    width:480,
    marginTop:30
   },
   dategap:{
     marginTop:20
   },
   heading:{
     textAlign:"center",
     fontWeight:"bold"
   }
})

function mapStateToProps(state){
    return {
        isDetailUpdated:state.DonorReducer.isDetailUpdated,
        userObj:state.AuthReducer.userObj,
    
        
    }
}

function mapDispatchToProps(dispatch){
    return{
        registerDonor : (donorDetail)=> dispatch(DonorMiddleware.registerDonor(donorDetail))
    }
}


class RegisterDonor extends Component {
  static contextTypes={
    router:PropTypes.object.isRequired
  }
  constructor(){
      super()
      this.state={
        bloodGroupValue: "",
        name:"",
        address:"",
        contactNo:"",
        dateOfBirth:new Date(),
        isDetailUpdated:false,
        
      }
      console.log("constructor state",this.state)
      console.log("constructor props",this.props)
  }
 

  

  componentDidUpdate(prevProps,prevState){
    if(prevProps.isDetailUpdated !== prevState.isDetailUpdated){
      this.context.router.history.push('/app')
    }
  }
  
  
  handleChangeInput=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    console.log(e.target.value)
  }
   
  
  handleChange = (event) => {
    this.setState({ bloodGroupValue: event.target.value });
    console.log(event.target.value)
  };
  
  handleDateChange =(e)=> {

    this.setState({ dateOfBirth: e.target.value});
    console.log(e.target.value)
  };
  
  handleSave=()=>{
    this.props.registerDonor(
      {
        uid:this.props.userObj.uid,
        name:this.state.name,
        address:this.state.address,
        contactNo:this.state.contactNo,
        bloodGroupValue:this.state.bloodGroupValue,
        dateOfBirth:this.state.dateOfBirth,
        isDonor:true
     
      });
      
  }

  
 

  

    render(){

        const bloodgroups=  ["A+","B+","AB+", "O+", "A-", "B-", "AB-", "O-"]
        const {name,address,contactNo,bloodGroupValue,dateOfBirth} = this.state
        const {classes} = this.props

       return(
            <div className="conatainer">
            <App/>
            <Paper className={classes.paperSize}>
             <h3 className={classes.heading}>Donor Registration</h3>
             <Divider/>
             <form>
            <TextField
            label="Full Name"
            name="name"
            type="name"
            placeholder="Name"
            fullWidth={true}
            onChange={this.handleChangeInput}
            value={name}
            margin="normal"
            required={true}
            InputLabelProps={{ shrink: true,}}
            />

            <TextField
            label="Address"
            name="address"
            type="text"
            placeholder="Address"
            fullWidth={true}
            onChange={this.handleChangeInput}
            value={address}
            margin="normal"
            required={true}
            InputLabelProps={{ shrink: true,}}
            />

           <TextField
            label="Contact No"
            name="contactNo"
            type="number"
            placeholder="Contact No"
            fullWidth={true}
            onChange={this.handleChangeInput}
            value={contactNo}
            margin="normal"
            required={true}
            InputLabelProps={{ shrink: true,}}
             />
         


          <FormControl  fullWidth={true} required={true} >
          <InputLabel htmlFor="select-multiple">Blood Group</InputLabel>
          <Select
            value={bloodGroupValue}
            name="bloodGroup"
            onChange={this.handleChange}
            renderValue={value => value}
            input={<Input id="select-multiple" />}
            
            >
          {bloodgroups.map(bloodgroup => {
             return <MenuItem
                key={bloodgroup}
                value={bloodgroup}
                
              >
              {bloodgroup}
              </MenuItem>
           })}
            </Select>
          </FormControl>
          
          
            
          

            <TextField
            label="Date of Birth"
            type="date"
            placeholder="Date Of Birth"
            name="date"
            fullWidth={true}
            onChange={this.handleDateChange}
            InputLabelProps={{ shrink: true, }}
            className={classes.dategap}
            
          /> 
          
            
           <Button variant="contained" color="primary" onClick={this.handleSave} className={classes.side}>SAVE</Button>
            </form>
            </Paper>    
            </div>
        )

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(RegisterDonor));