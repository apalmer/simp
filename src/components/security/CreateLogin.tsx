import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../../firebase/auth";

export function CreateLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [creds, setCreds] = useState({});
    const [raw, setRaw] = useState('initial raw');

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log('username: ', username);
        console.log('password: ', password);
        console.log('confirmPassword', confirmPassword);

        try {
            let retreivedCreds = await createUserWithEmailAndPassword(auth, username, password);
            setCreds(retreivedCreds)
            setRaw("raw updated");
        }
        catch (e) {
            console.log('error thrown');
            const err = await e;
            setCreds(JSON.stringify(err));
            setRaw("raw updated");

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
                <div>
                    <label>Confirm Password</label>
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                </div>
                <button type="submit" onClick={onSubmit}>Create Login</button>
            </form >
            <div>
                { JSON.stringify(creds)}
                {raw}
            </div>
        </div >
    )
}