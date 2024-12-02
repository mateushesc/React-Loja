import React, { useState } from 'react';

const Logout = () => {
    const [responseMessage, setResponseMessage] = useState('');

    // Manipula o logout ao clicar no botão
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Inclui cookies na requisição, se necessário
            });
            
            if (response.ok) {
                setResponseMessage('Logout successful!');
            } else {
                setResponseMessage('Error logging out.');
            }
        } catch (error) {
            setResponseMessage('Failed to connect to server.');
        }
    };

    return (
        <div className="logout">
            <button onClick={handleLogout}>Logout</button>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default Logout;
