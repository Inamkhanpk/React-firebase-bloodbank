import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import AuthMiddleware from './../store/middleware/authMiddleware';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';



const styles=()=>({
  happ:{
    position:"relative",
    left:250,
    margin:100,
    padding:20,
    color:"red"
  },
  gap :{
    position:"relative",
    left:250,
    margin:100,
    padding:20,
    fontSize:20,
    width:500,
    height:300
  },
  high:{
    position:"relative",
    bottom:45,
    left:100,
  },
  big:{
    fontSize:30
    
  },
  buttoncolor:{
    color:"white"
  }
})
function mapStateToProps(state){
  return{
    isRegistered:state.AuthReducer.isRegistered
  }
}

function mapDispatchToProps(dispatch){
  return{
    signup : ( credentials) => dispatch(AuthMiddleware.signup(credentials))
  }
}
class SignUp extends Component {

  static contextTypes = {
    router:PropTypes.object.isRequired
  }
  constructor(props){
    
    super(props)
    
    this.state={
      name:'',
      email:'',
      password:'',
      isRegistered:false
    }
    console.log("constructor this.props",this.props)
    console.log("constructor this.state",this.state)
  }

  
    static getDerivedStateFromProps(nextProps){
      console.log("getDerivedStateFromProps",nextProps)
      if(!nextProps.isRegistered){
        return nextProps.isRegistered
      }
      return null;
    }

    componentDidUpdate(prevState,prevProps){
      console.log("componentDidUpdate",prevState)
      console.log("componentDidUpdate",this.props)
      
      if(prevState !== this.props){
      
        this.context.router.history.push("/login")
      }
    }

    

    
    
    handleChange=( e)=>{

      this.setState({
     [e.target.name]:e.target.value
     })
     console.log("handleChange", this.state)
    }
  
    handleSubmit = () =>{
      this.props.signup({
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        isRegisterd:false
      })
    }


  
  render() {
    console.log("render this props",this.props)
    console.log("render this state",this.stae)
    const {classes} = this.props
    const {name,email,password} = this.state
    return (
      <div className="container" >
        <h1 className={classes.happ}>BLOOD BANK APP</h1>
      <Paper className={classes.gap} >
        <div className="form-group">
        <TextField
          label="Full Name"
          name="name"
          type="name"
          className={classes.big}
          placeholder="Name"
          
          fullWidth={true}
          onChange={this.handleChange}
          value={name}
          margin="normal"
          required={true}
          InputLabelProps={{ shrink: true,}}
        />
        </div>
        

         <div className="form-group">
        <TextField
          label="Your Email"
          name="email"
          type="email"
          className={classes.big}
          placeholder="Email"
          fullWidth={true}
          onChange={this.handleChange}
          value={email}
          margin="normal"
          required={true}
          InputLabelProps={{ shrink: true,}}
        />
        </div>

        <div className="form-group">
        <TextField
          label="Password"
          name="password"
          type="password"
          className={classes.big}
          placeholder="Password"
          fullWidth={true}
          onChange={this.handleChange}
          value={password}
          margin="normal"
          required={true}
          InputLabelProps={{ shrink: true,}}
        />
        </div>
         
         <div className="form-group">
         <Button variant="contained" color="primary"   onClick={this.handleSubmit}>
          SIGN UP
         </Button>
         </div>
        

        <div className="form-group">
        
        <Button variant="contained" color="primary" className={classes.high}>
        <Link to="/login" className={classes.buttoncolor}>
        
        LOGIN
      
        </Link>
        </Button>
        
        
        </div>



        </Paper> 

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUp));
