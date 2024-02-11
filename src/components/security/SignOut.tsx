import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { auth, onAuthStateChanged, signOut } from "../../firebase/auth";

export function SignOut() {
    const [user, setUser] = useState<User | null>();
    const [response, setResponse] = useState('');

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
        try {
            await signOut(auth);
            setUser(null);
            setResponse('user signed out');
            console.log('signed out user')
        }
        catch (e) {
            const err = await e;
            setResponse(JSON.stringify(err));
        }
        console.log('Sign Out');
    }

    return (
        <div>
            <form>
                <button type="submit" onClick={onSubmit}>Sign Out</button>
            </form >
            <div>
                User: {JSON.stringify(user)}
                Response: {response}
            </div>
        </div >
    )
}