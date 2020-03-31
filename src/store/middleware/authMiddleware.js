import AuthAction from './../action/authAction';
import * as firebase from 'firebase';
import fire from './../../config/index';
import LocalStorageManager from './../../services/LocalStorageManager'

export default class AuthMiddleware {
    static signup(credentials){
        
        return (dispatch)=>{
            
            dispatch(AuthAction.signup())
            AuthMiddleware.registerUserOnFirebase(dispatch,credentials)
        }
    }

    static registerUserOnFirebase(dispatch,credentials){
        firebase.auth()
        .createUserWithEmailAndPassword(credentials.email,credentials.password)
        .then((authUserConfirm)=>{ // then function k argument me values hen hame jo signup k lye bhejn hen ui se
            console.log(authUserConfirm)
            
            
            AuthMiddleware.createUserInFirebase(dispatch,credentials,authUserConfirm)
        })
        .catch((error)=>{
            console.log(error)
            dispatch(AuthAction.signupRejected(error))
        })
    }

    static createUserInFirebase(dispatch,credentials,authUserConfirm){
        // user object uid ki value  authuser ki user ki value se aya jo console
        // me authUser k zariye user.uid me mil rha  hai
        let user = {
            uid:authUserConfirm.user.uid,
            name:credentials.name,
            email:credentials.email,
            isDonor:false
            
           };
           firebase.database().ref('/')
           .child(`users/${user.uid}`) //user.uid ye upar jo let me object define hai wahan se aya
           .set(user)
           .then(()=>{
               dispatch(AuthAction.signupSuccessful())
           });
    }


    static signin(credentials) {
    
        return (dispatch) => {
            dispatch(AuthAction.signin())
            AuthMiddleware.authenticateUserOnFirebase(dispatch,credentials);            
        }
    }

    static authenticateUserOnFirebase(dispatch,credentials){
        firebase.auth()
                .signInWithEmailAndPassword(credentials.email, credentials.password)
                .then( (authUser)=>{ // yahan se hame value mil jati hai login user ki
                    console.log("singIN successfull ",authUser);
                    AuthMiddleware.getUserFromFirebase(dispatch,authUser);
                })
                .catch((error)=> {
                    
                    console.log("signup error ",error);
                    dispatch(AuthAction.signinRejected(error));
                });

    }

    static getUserFromFirebase(dispatch,authUser){
        firebase.database().ref('/')
            .child(`users/${authUser.user.uid}`)
            .once('value')
            .then((snapshot) => {
                console.log("user after login ",snapshot.val());
                LocalStorageManager.setUser(snapshot.val())
                dispatch(AuthAction.signinSuccessful(snapshot.val()));
            });
    }


    static logout() {
        return (dispatch) => {
            dispatch(AuthAction.logout())
            AuthMiddleware.logoutFromFirebase(dispatch);            
        }
    }

    static logoutFromFirebase(dispatch){
        LocalStorageManager.removeUser();
        firebase.auth().signOut()
        .then(function (){
            dispatch(AuthAction.logoutSuccessful())
        })
        .catch(function(error){
            console.log("Error in lougout ",error);
            dispatch(AuthAction.logoutSuccessful())
        })

    }


    static updateUser(donorDetail){
        return (dispatch) => {
            firebase.database().ref('/')
            .child(`users/${donorDetail.uid}`)
            .once('value')
            .then(function (userObj){
                console.log("user after update ",userObj.val());
                LocalStorageManager.setUser(userObj.val())
                dispatch(AuthAction.updateUser(userObj.val()));
            });           
        }
    }

    static isLoggedIn() {
        return (dispatch) => {
            let user = LocalStorageManager.getUser();
            if(user){
                dispatch(AuthAction.signinSuccessful(user))
            }
            else {
                console.log("not logged in ");
               // dispatch(AuthAction.signinSuccessful(user))
            }
        }
    }

}
