class AuthenticationService{
registerSccessfullLogn(username,password)
{
    sessionStorage.setItem('AuthenticatedUser',username);
}

}

export default new AuthenticationService;