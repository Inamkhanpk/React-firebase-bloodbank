import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {connect} from 'react-redux';
import AuthMiddleware from './../store/middleware/authMiddleware';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import {Link} from 'react-router-dom';




function mapStateToProps(state){
    return{
     isAuthenticated :state.AuthReducer.isAuthenticated,
     userObj:state.AuthReducer.userObj
    }

}
function mapDispatchToProps(dispatch){
    return{
    logout : ()=>dispatch(AuthMiddleware.logout()),
    
    
    }
}

const styles = () => ({
    size:{
        fontSize:30,
        

    },
    
    button:{
       position:"relative",
       left:700,
       margin:10,
       fontSize:20
    }
})


class App extends Component{
 
    static contextTypes = {
        router :PropTypes.object.isRequired
    }
    constructor(){
        super();
        
        this.state = {
            mobileOpen: false,
            isAuthenticated:true
          };
    }
     
    static getDerivedStateFromProps(prevState,nextProps){
        if(prevState.isAuthenticated !== nextProps.isAuthenticated){
            return {
                isAuthenticated:prevState.isAuthenticated
            
            }
        }
       return null;
    }
    
    componentDidUpdate(prevState,prevProps){
        if(prevState !== this.props){

        this.context.router.history.push('/login')
        }
    }
    
    

    handleSignout=()=>{
        this.props.logout()
        
        
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render(){
        const {classes} = this.props
        return(
            <div className="container">

                <AppBar>
                <Toolbar>
                <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerToggle}>
                 <MenuIcon />
                </IconButton>
               <Typography variant="h6" color="inherit" className={classes.size} >
                BLOOD BANK SYSTEM
               </Typography>
              <Button color="inherit" className={classes.button} onClick={this.handleSignout}>SIGN OUT</Button>
                </Toolbar>
              </AppBar>


                <Drawer 
            variant="temporary" 
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}>

            <Avatar src="" size={50}/>
            <span>{this.props.userObj.name}</span>

             <div>
             <MenuList>
            <MenuItem>
            
             <Link to="/app">DashBoard</Link>
            </MenuItem>
            <MenuItem>
            
            <Link to="/registerDonor">{this.props.userObj.isDonor?"Update Info":"Register as Doner"}</Link>
            </MenuItem>
            <MenuItem>
            
            <Link to="/donorlist">
            Donors
            </Link>
            </MenuItem>
            </MenuList>
             </div>
             </Drawer>


                

                </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));