import React,{Component} from 'react';
import {connect} from 'react-redux';
import AuthMiddleware from './../store/middleware/authMiddleware';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link,withRouter} from 'react-router-dom';
//import { withRouter } from "react-router";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';





const styles = () =>({
    gap:{
        margin:100,
        padding:20,
        fontSize:20,
        width:500,
        height:250,
        position:"relative",
        left:250
    },
    bcolor:{
        color:"white"
    },

    up:{
      position:"relative",
      left:100,
      bottom:45

    }
})


function mapStateToProps(state){
    return{
        isAuthenticated:state.AuthReducer.isAuthenticated

    }
}

function mapDispatchToProps(dispatch){
    return{
        signin : (credentials)=> dispatch(AuthMiddleware.signin(credentials))

    }
}

class Login extends Component{
    static contextTypes = {
        router:PropTypes.object.isRequired
    }
    constructor(props,context){
        super(props,context);
        this.state={
            email:'',
            password:'',
            isAuthenticated:false
        }
        console.log("constructor prop",this.props)
        console.log("constructor state",this.props)
    }

static getDerivedStateFromProps(prevState,nextProps){
    console.log("getDerivedStateFromProps",prevState)
    console.log("getDerivedStateFromProps",nextProps)
   if(nextProps.isAuthenticated !== prevState.isAuthenticated){
       return{
           isAuthenticated:nextProps.isAuthenticated
       }
    
   }
   return null
}


// // componentDidUpdate(prevProps,prevState){
    
// //     console.log("componentDidUpdate_Props",prevProps)
// //     console.log("componentDidUpdate_State",prevState)
// //     if(this.facebookAccount())
// //     if(prevProps !== this.props){
// //      this.context.router.history.push('/app')
// //     } 
// }
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
handleSignin=()=>{
    this.props.signin({
        email:this.state.email,
        password:this.state.password
    })
}

googleAccount=()=>{
  
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result)
        console.log(result.credential.accessToken)
        console.log(result.user)
        var token = result.credential.accessToken;
         //console.log(result.credential.accessToken)
        // The signed-in user info.
        var user = result.user;
         // console.log(result.user)
        if(result){
            console.log(this.props.location)
           // this.context.router.history.push('/app')
           this.props.location.pathname("/app")
        }
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    
}


facebookAccount=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        console.log(result)
        console.log(result.credential.accessToken)
        console.log(result.user)
        var token = result.credential.accessToken;
        console.log(result)
        // The signed-in user info.
        var user = result.user;
        if(user){
            console.log(this.props)
           // this.context.router.history.push('/app')
           this.props.history.push("/app")
        }

        // ...
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

      
     
}


    render(){
        console.log("render state",this.state)
        console.log("render props",this.props)
        const {classes} = this.props
        const {email,password} = this.state
        return(
            <div className="container">
            
            <Paper className={classes.gap}>
            <div className="form-group">
            <TextField
          label="Email"
          name="email"
          type="email"
          
          placeholder="Placeholder"
          helperText="Full width!"
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
        
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth={true}
          onChange={this.handleChange}
          value={password}
          margin="normal"
          required={true}
          InputLabelProps={{ shrink: true,}}
           />
            </div>


        <div className="form-group">
         <Button variant="contained" color="primary" onClick={this.handleSignin}>
        Sign In
        
         </Button>
        </div>
         <Button variant="contained" color="primary" className={classes.up}>
        <Link to="/" className={classes.bcolor}>
              SIGN UP
            </Link>
        </Button>
        <Button variant="contained" color="primary" className={classes.up} onClick={this.googleAccount}>
        <Link to="/" className={classes.bcolor}>
              Google
            </Link>
        </Button>
        
        <Button variant="contained" color="primary" className={classes.up} onClick={this.facebookAccount}>
        <Link to="/" className={classes.bcolor}>
              Facebook
            </Link>
        </Button>

        </Paper>
            </div>

        )
    }
}

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login)));
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(withRouter(Login)))