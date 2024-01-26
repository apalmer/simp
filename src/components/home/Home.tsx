import { useEffect } from "react";
import { } from "module";
import { auth, onAuthStateChanged } from "../../firebase/auth"
export function Home() {

    let userId = '';
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                userId = user.uid;
                console.log('userId: ', userId);
            }
        });
    }, []);

    return (
        <div>
            User id: {userId}
        </div>
    )
}