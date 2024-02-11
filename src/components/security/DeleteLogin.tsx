import { useState, useEffect } from "react";
import { User } from "firebase/auth"
import { auth, onAuthStateChanged } from "../../firebase/auth";

export function DeleteLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<User|null>();
    const [response,setResponse] = useState('');

   useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('user: ', user);
            }
        });
    }, []);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log('username: ', username);
        console.log('password: ', password);

        try {
            if(user){
                await user.delete();
                setUser(null);
                setResponse('user deleted');
                console.log('deleted user');
            }
        }
        catch (e) {
            const err = await e;
            setResponse(JSON.stringify(err));
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
                <button type="submit" onClick={onSubmit}>Delete Login</button>
            </form >
            <div>
                User: {JSON.stringify(user)}
                Response: {response}
            </div>
        </div >
    )
}