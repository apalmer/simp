import { useEffect, useState } from "react";
import { auth, onAuthStateChanged, signInAnonymously } from "../../firebase/auth";
import { UserCredential } from "firebase/auth";

export function AnonymousSignIn() {

    const [user] = useState({});
    const [creds, setCreds] = useState<UserCredential>();
    const [response, setResponse] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log('user exists');
                setResponse(JSON.stringify(user));
            }
            else {
                console.log('user doesnt exist');
                try {
                    let anonymousCreds = await signInAnonymously(auth);
                    setCreds(anonymousCreds);
                }
                catch (e) {
                    let err = await e;
                    setResponse(JSON.stringify(err));
                    console.log('anonymous sign in failed');
                }
            }
        });
    }, []);

    return (
        <div>
            User: {JSON.stringify(user)}
            Creds: {JSON.stringify(creds)}
            Response: {response}
        </div>
    )
}