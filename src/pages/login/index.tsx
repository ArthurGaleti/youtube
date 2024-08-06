import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";


function Login(){
    const { handleLogin } = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    return(
        <>
            <div>
               Login
            </div>
        
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
            <button onClick={() => handleLogin(email, senha)}>login</button>
            
        </>
    )
}

export default Login;