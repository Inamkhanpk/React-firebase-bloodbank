import AuthAction from './../action/authAction'

const INITIAL_STATE = {
   isProcessing:false,
   isRegistered:false,
   isError:false,
   errorMessage:{},
   isAuthenticated : false,
   userObj: {},

}
function AuthReducer(state=INITIAL_STATE,action){
    switch(action.type){
     case AuthAction.SIGNUP :
     return {...state,isProcessing:true,isRegistered:true,isError:false};
     case AuthAction.SIGNUP_SUCCESSFUL :
     return {...state,isProcessing:false,isRegistered:true,isError:false,errorMessage:{}};
     case AuthAction.SIGNUP_REJECTED :
     return {...state,isProcessing:false,isRegistered:false,isError:true,errorMessage:action.payload};
     case AuthAction.SIGNIN :
     return {...state,isProcessing: true, isAuthenticated: false, isError : false};
     case AuthAction.SIGNIN_SUCCESSFUL :
     return {...state,isProcessing: false, isAuthenticated: true, isError : false, userObj: action.payload ,  errorMessage: {}};
     case AuthAction.SIGNIN_REJECTED :
     return {...state,isProcessing: false, isAuthenticated: false,userObj:{}, isError : true, errorMessage: action.payload};
     case AuthAction.LOGOUT:
     return {...state, isProcessing: true};
     case AuthAction.LOGOUT_SUCCESSFUL:
     return {...state, isProcessing: false, isAuthenticated: false,userObj:{}};
     case AuthAction.UPDATE_USER:
     return {...state, isProcessing: false, isAuthenticated: true,userObj: action.payload};
     case AuthAction.ISLOGGEDIN:
     return {...state, isProcessing: false, isAuthenticated: true,userObj:action.payload};
     default : 
     return state;
    }


}


export default AuthReducer;