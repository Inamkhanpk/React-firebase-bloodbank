export default class AuthAction{
    static SIGNUP = 'SIGNUP'
    static SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL'
    static SIGNUP_REJECTED = 'SIGNUP_REJECTED'
    static SIGNIN = 'SIGNIN'
    static SIGNIN_SUCCESSFUL = 'SIGNIN_SUCCESSFUL'
    static SIGNIN_REJECTED = 'SIGNIN_REJECTED'
    static LOGOUT = 'LOGOUT';
    static LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';
    static UPDATE_USER = 'UPDATE_USER';
    static ISLOGGEDIN = 'ISLOGGEDIN';


    static signup(){
        return {
            type:AuthAction.SIGNUP
        }
    }

    static signupSuccessful(){
        return {
            type:AuthAction.SIGNUP_SUCCESSFUL,
            
        }
    }

    static signupRejected(error){
        return{
            type:AuthAction.SIGNUP_REJECTED,
            payload:error
        }
        
    }

    static signin(){
        return{
            type:AuthAction.SIGNIN
        }
    }

    static signinSuccessful(userObj){
        return{
           type:AuthAction.SIGNIN_SUCCESSFUL,
           payload:userObj
        }
    }

    static signinRejected(error){
        return{
          type:AuthAction.SIGNIN_REJECTED,
          payload:error
        }
    }

    static logout() {
        return {
            type: AuthAction.LOGOUT
        }
    }

    static logoutSuccessful() {
        return {
            type: AuthAction.LOGOUT_SUCCESSFUL
        }
    }

    static updateUser(updatedUser) {
        return {
            type: AuthAction.UPDATE_USER,
            payload: updatedUser
        }
    }

    static isLoggedIn(user) {
        return {
            type: AuthAction.ISLOGGEDIN,
            payload: user
        }
    }
}