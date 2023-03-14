import { useRef, useState ,useContext} from "react";
import { useHistory } from "react-router-dom";
import NavContext from "../../Store/NavContext";
import classes from './Login.module.css';

const LoginForm = () => {
    const [isLoading,setIsLoading]=useState(false);

    const history=useHistory();

    const navCtx=useContext(NavContext);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitFormHandler=(event)=>{
        event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;

    setIsLoading(true);
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDfaJjy3LS1PJdi1F6WXFp9vNutlkkdJwA',
              {
                method: 'POST',
                body: JSON.stringify({
                  email: enteredEmail,
                  password: enteredPassword,
                  returnSecureToken: true
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(async (res) => {
                setIsLoading(false)
                if (res.ok) {
                  const data = await res.json();
                  console.log(data);
                  navCtx.login(data.idToken);
                  history.replace('/store');
                 
                 
                }
                else {
                  const data_1 = await res.json();
                  let errorMessag = "Authentication failed";
                  if (data_1 && data_1.error && data_1.error.message) {
                    errorMessag = data_1.error.message;
                  }
                  alert(errorMessag);
      
                }
              })
          
    }

    return (
        <section className={classes.login} >
            <h1>Login</h1>
            <form onSubmit={submitFormHandler}>
                
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' ref={emailInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        ref={passwordInputRef}
                        required
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit">{isLoading ? "Sending request " : "Login"}</button>
                </div>
            </form>
        </section>

    )
}
export default LoginForm;