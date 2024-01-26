export function SignOut() {

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log('Sign Out');
    }

    return (
        <div>
            <form>
                <button type="submit" onClick={onSubmit}>Sign Out</button>
            </form >
        </div >
    )
}