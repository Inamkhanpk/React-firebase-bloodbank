import DonorAction from './../action/donorAction';
import AuthMiddleware from "./authMiddleware";
import * as firebase from 'firebase';

export default class DonorMiddleware {

    
    static registerDonor(donorDetail) {
        console.log("donorDetail ",donorDetail);
        return (dispatch) => {
            dispatch(DonorAction.registerDonor())
            DonorMiddleware.updateUserInfoOnFirebase(dispatch,donorDetail);            
        }
    }

    static updateUserInfoOnFirebase(dispatch,donorDetail){
        firebase.database().ref('/')
            .child(`users/${donorDetail.uid}`)
            .update(donorDetail)
            .then(function (){
                dispatch(DonorAction.registerDonorSuccessful());
                dispatch(AuthMiddleware.updateUser(donorDetail));
            });

    }

    static getDonorList() {
        console.log("getDonorList ",);
        return (dispatch) => {
            dispatch(DonorAction.getDonorList())
            DonorMiddleware.getDonorListFromFirebase(dispatch);            
        }
    }

    static getDonorListFromFirebase(dispatch){
        //playersRef.orderByChild("name").equalTo("John")
        const donorListRef = firebase.database().ref('/')
                            .child("users")
                            .orderByChild("isDonor").equalTo(true);
                            donorListRef.on("child_added",function (snapshot){
                                
                        //dispatch(DonorAction.getDonorListSuccessful())
                        dispatch(DonorAction.addDonorToList(snapshot.val()))
                    })
    }

    static getDonorDetail(donorId) {
        console.log("getDonorDetail ",donorId);
        return (dispatch) => {
            dispatch(DonorAction.getDonorDetail())
            DonorMiddleware.getDonorDetailFromFirebase(dispatch,donorId);            
        }
    }

    static getDonorDetailFromFirebase(dispatch,donorId){
        firebase.database().ref('/')
            .child(`users/${donorId}`)
            .on("value",function (snapshot){
                console.log(snapshot.val())
                dispatch(DonorAction.getDonorDetailSuccessful(snapshot.val()))
            });
    }

}

