import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DonorMiddleware from './../store/middleware/donorMiddleware';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import App from './App';
import {withStyles} from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Error from '@material-ui/icons/Error';

function mapStateToProps(state){
    return{
     donorList:state.DonorReducer.donorList,
     
    }
}

function mapDispatchToProps(dispatch){
    return{
    getDonorList : ()=> dispatch(DonorMiddleware.getDonorList())
    }
}

const styles= () =>({
    listitem:{
        width:1220,
        height:1000,
        position:"relative",
        top:70,
        left:-40,
        border:'solid 1px #d9d9d9',
        borderWidth:"thick",
        borderColor:"black",
        overflow: 'hidden'

    },
    name:{
        fontSize:25,
        color:"black",
        fontWeight:"bold"
    },
    writel:{
        
        float:"left",
        
    },
    writeld:{
        float:"left",
    

    },
    writer:{
        float:"right",
        
    }
})
class DonorList extends Component{

    static contextTypes = {
        router: PropTypes.object.isRequired
      }
    constructor(){
        super();
        

        console.log("constructor props",this.props)
        console.log("constructor state",this.state)
    }

    handleListItemClick(uid) { this.context.router.history.push("/donorlist/"+uid);}


    componentDidMount() {
        console.log("componentDidMount props",this.props)
        console.log("componentDidMount state",this.state)
        
          this.props.getDonorList();
        
    }
    
    
   
    
    render(){
        const {classes} = this.props
        console.log("render props",this.props)
        console.log("render state",this.state)
        
        return(
            <div className="container">
             <App/>
    
<List className={classes.listitem} subheader={<ListSubheader className={classes.name}>Donor List</ListSubheader>}>
{this.props.donorList
                                  .map(donor=>{
                                  return (
                                    <div key={donor.uid}>
                                    
                                  <ListItem button onClick={()=>this.handleListItemClick(donor.uid)}>
                                  <ListItemAvatar>
                                  <Avatar alt="" src="" />
                                  </ListItemAvatar>
                                  <ListItemText className={classes.writel}>
                                      {donor.name}
                                  </ListItemText>
                                  <ListItemText className={classes.writeld}>
                                      {"BloodGroup:"+donor.bloodGroupValue}
                                  </ListItemText>
                                  <ListItemText  className={classes.writer}>
                                 <ListItemIcon>
                                 <Error/>
                                 </ListItemIcon>
                                 </ListItemText >
                                  </ListItem>
                                  
                                  <Divider/>
                                  
                                   </div> 
                                  )
                                  })
                            
                                }
                                </List>
                                
       
       </div> )
    }
                          
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(DonorList));