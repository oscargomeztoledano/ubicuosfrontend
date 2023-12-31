import { GoogleLogin } from "@react-oauth/google";


function Login() {
    return (
        <GoogleLogin onSuccess={(credentialResponse) => console.log(credentialResponse)} 
        onError={()=> {console.log("error de log")}}/>
    );

}
export default Login;
