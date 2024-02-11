import { useState } from "react";
import { auth,signOut } from "../../firebase/auth";

export function SignOut() {
    const [response, setResponse] = useState('')
    const onSubmit = async (e: any) => {
        e.preventDefault();
        try{
           await signOut(auth); 
           setResponse('user signed out');
           console.log('signed out user')
        }
        catch(e){
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
                {response}
            </div>
        </div >
    )
}