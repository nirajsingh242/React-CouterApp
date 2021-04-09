class AuthenticationService{
registerSccessfullLogin(username,password)
{
    sessionStorage.setItem('AuthenticatedUser',username);
    console.log("Authenticated "+username);
}

logout()
{
    sessionStorage.removeItem('AuthenticatedUser');
    console.log("sssion cleared");
}

isUserLoggedIn()
{
    let user=sessionStorage.getItem('AuthenticatedUser');
    if(user===null)
    {
        return false;
    }

    return true;
}

getLoggedInUser()
{
    let user=sessionStorage.getItem('AuthenticatedUser');
    if(user===null)
    {
        return '';
    }

    return user;
}

}

export default new AuthenticationService();//As we need to export instance of it