import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../firebase/auth";

export function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [creds, setCreds] = useState({});

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log('username: ', username);
        console.log('password: ', password);

        try {
            let r = await signInWithEmailAndPassword(auth, username, password);
            console.log('user signed in');
            setCreds(r)
        }
        catch (e) {
            let err = await e;
            setCreds(JSON.stringify(err))
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
                <button type="submit" onClick={onSubmit}>Create Login</button>
            </form >
            <div>
                {JSON.stringify(creds)}
            </div>
        </div >
    )
}