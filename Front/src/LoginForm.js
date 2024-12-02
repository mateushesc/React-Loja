import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    
    const [responseMessage, setResponseMessage] = useState('');

    // Manipula a mudança de input no formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Manipula o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
// eslint-disable-next-line no-unused-vars
                const result = await response.json();
                setResponseMessage('Login successful!');
            } else {
                setResponseMessage('Invalid username or password.');
            }
        } catch (error) {
            setResponseMessage('Failed to connect to server.');
        }
    };

    return (
        <div className="login-form">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome de Usuário:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default LoginForm;
