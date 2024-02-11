import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../../firebase/auth"
export function Home() {

    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('userId: ', user.uid);
            }
        });
    }, []);

    return (
        <div>
            User id: {JSON.stringify(user)}
        </div>
    )
}