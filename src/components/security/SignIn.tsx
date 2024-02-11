import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../firebase/auth";

export function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [creds, setCreds] = useState({});
    const [response, setResponse] = useState('');

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log('username: ', username);
        console.log('password: ', password);

        try {
            let signedInCreds = await signInWithEmailAndPassword(auth, username, password);
            setCreds(signedInCreds);
            setResponse('user signed in')
        }
        catch (e) {
            let err = await e;
            setCreds(JSON.stringify(err))
            setResponse('error signing in');
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit" onClick={onSubmit}>Sign In</button>
            </form >
            <div>
                User: {JSON.stringify(creds)}
                Response: {response}
            </div>
        </div >
    )
}