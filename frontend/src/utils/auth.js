class Authorization {

    // return auth
    isLoggedIn (auth) {
        if(auth.loggedIn) {
            return true;

        } else {
            return false;
        }
    }
  
}

    export default new Authorization();