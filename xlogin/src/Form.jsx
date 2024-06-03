import React, { useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'password') {
            setMessage(`Welcome, ${username}!`);
            setAuthenticated(true);
        } else {
            setMessage('Invalid username or password');
            setAuthenticated(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1>Login Page</h1>
            {message && !authenticated && (
                <p style={{ ...styles.message, ...styles.errorMessage }}>
                    {message}
                </p>
            )}
            {!authenticated && (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.button}>
                        Submit
                    </button>
                </form>
            )}
            {authenticated && (
                <p style={styles.welcomeMessage}>
                    Welcome, {username}!
                </p>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputGroup: {
        marginBottom: '15px',
        width: '100%',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    message: {
        marginBottom: '20px',
    },
    errorMessage: {
        color: 'red',
    },
    welcomeMessage: {
        color: '#056608',
    },
};

export default Form;
