import React,{Component} from 'react';
import {connect} from 'react-redux';
import DonorMiddleware from './../store/middleware/donorMiddleware';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';
import App from './App';


const styles = () => ({
  card:{
     position:"relative",
     top:200,
     left:300,
     width:500,
     
      
  }
})

function mapStateToProps(state){
    return{
     donorIdDetail : state.DonorReducer.donorIdDetail,

    }
}


function mapDispatchToProps(dispatch){
    return{
        getDonorDetail:(donorId)=>dispatch(DonorMiddleware.getDonorDetail(donorId))
        
    }
}
class DonorDetail extends Component{
    
componentDidMount() {
        this.props.getDonorDetail(this.props.match.params.uid);
        console.log(this.props.match)
      }


    render(){
        const {donorIdDetail,classes} = this.props;
        
        return(
            <div className="container">
            <App/>
                <Card className={classes.card}>
                    <CardHeader
                    avatar={
                        <Avatar  >
                          
                        </Avatar>
                      }
                      
                      title={donorIdDetail.name}
                      subheader={donorIdDetail.bloodGroupValue}
                      />

                      <CardContent>
                          <Typography>
                          Contatct No. : {donorIdDetail.contactNo}
                          </Typography>
                          <Typography>
                          Email. : {donorIdDetail.email}
                          </Typography>
                          <Typography>
                          Date Of Birth : {donorIdDetail.dateOfBirth}
                          </Typography>
                          <Typography>
                          Address : {donorIdDetail.address}
                          </Typography>

                      </CardContent>


                </Card>    
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(DonorDetail));