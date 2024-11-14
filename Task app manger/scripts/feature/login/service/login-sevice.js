function login(userInfo){
    if(localStorage){
        if(localStorage.user){
            alert("Already Register");
        }
        else{
            localStorage.user = json.stringify(userinfo);
            alert("User Register");
        }
    }
    else{
        alert("Outdated Browser and Not Having Support of localStorage...");
    }
};