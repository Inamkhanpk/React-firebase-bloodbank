// import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import AuthMiddleware from './../store/middleware/authMiddleware';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {Link} from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import * as firebase from 'firebase';

// const styles = () =>({
//     gap:{
//         margin:100,
//         padding:20,
//         fontSize:20,
//         width:500,
//         height:250,
//         position:"relative",
//         left:250
//     },
//     bcolor:{
//         color:"white"
//     },

//     up:{
//       position:"relative",
//       left:100,
//       bottom:45

//     }
// })


// function mapStateToProps(state){
//     return{
//         isAuthenticated:state.AuthReducer.isAuthenticated

//     }
// }

// function mapDispatchToProps(dispatch){
//     return{
//         signin : (credentials)=> dispatch(AuthMiddleware.signin(credentials))

//     }
// }

// class Lfacebook extends Component{
//     static contextTypes = {
//         router:PropTypes.object.isRequired
//     }
//     constructor(){
//         super();
        
//         console.log("constructor prop",this.props)
//         console.log("constructor state",this.props)
//     }

// static getDerivedStateFromProps(prevState,nextProps){
//     console.log("getDerivedStateFromProps",prevState)
//     console.log("getDerivedStateFromProps",nextProps)
//    if(nextProps.isAuthenticated !== prevState.isAuthenticated){
//        return{
//            isAuthenticated:nextProps.isAuthenticated
//        }
    
//    }
//    return null
// }


// componentDidUpdate(prevProps,prevState){
    
//     console.log("componentDidUpdate_Props",prevProps)
//     console.log("componentDidUpdate_State",prevState)
//     if(this.facebookAccount())
//     if(prevProps !== this.props){
//      this.context.router.history.push('/app')
//     } 
// }






// facebookAccount=()=>{
//     var provider = new firebase.auth.FacebookAuthProvider();

//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         var token = result.credential.accessToken;
//         con
//         // The signed-in user info.
//         var user = result.user;
//         // ...
//       }).catch(function(error) {
//         // Handle Errors here.
//         console.log(error)
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//       });

      
   
// }


//     render(){
//         console.log("render state",this.state)
//         console.log("render props",this.props)
//         const {classes} = this.props
    
//         return(
//             <div className="container">
            
//             <Paper className={classes.gap}>
            
            
//         <div className="form-group">
//         <Button variant="contained" color="primary" className={classes.up} onClick={this.facebookAccount}>
//         <Link to="/" className={classes.bcolor}>
//               Facebook
//             </Link>
//         </Button>
//         </div>
         
        

//         </Paper>
//             </div>

//         )
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Lfacebook));