import React,{useState} from 'react'

function Loginpart() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);

    const login = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem('', userData);
        setIsLoggedin(true);
        setName('');
        setEmail('');
        setPassword('');
    };

    const logout = () => {
        localStorage.removeItem('');
        setIsLoggedin(false);
    };

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                />
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                />
                <button type="submit" onClick={login}>
                    Login
                </button>
                <h1>login in</h1>
            <button onClickCapture={logout}>logout user</button>
            </form>
        </div>
  )
}

export default Loginpart
