import { useState } from "react";

export function CreateLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log('username: ', username);
        console.log('password: ', password);
        console.log('confirmPassword', confirmPassword)
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
        </div >
    )
}