export default function Login() {
    return (
        <div className="container">
            <div className="title">
                <h1>Sign in</h1>
            </div>
            <form>
                <div className="form-items">
                    <div>
                        <h3>Username:</h3>
                    </div>
                    <input type="text" name="username" />
                </div>
                <div className="form-items">
                    <div>
                        <h3>Password:</h3>
                    </div>
                    <input type="text" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>       
        </div>
    )
}