import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, user: 'user' }]);
            setInput('');
            // Simulate bot response
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'This is a bot response.', user: 'bot' }
                ]);
            }, 1000);
        }
    };

    return (
        <div style={styles.chatbotContainer}>
            <div style={styles.chatWindow}>
                {messages.map((message, index) => (
                    <div key={index} style={message.user === 'user' ? styles.userMessage : styles.botMessage}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleSend} style={styles.sendButton}>Send</button>
            </div>
        </div>
    );
};

const styles = {
    chatbotContainer: {
        width: '300px',
        height: '400px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
    },
    chatWindow: {
        flex: 1,
        padding: '10px',
        overflowY: 'auto',
    },
    inputContainer: {
        display: 'flex',
        borderTop: '1px solid #ccc',
    },
    input: {
        flex: 1,
        padding: '10px',
        border: 'none',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
    },
    sendButton: {
        padding: '10px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
    },
    userMessage: {
        textAlign: 'right',
        margin: '5px 0',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
    },
    botMessage: {
        textAlign: 'left',
        margin: '5px 0',
        padding: '10px',
        backgroundColor: '#f1f1f1',
        borderRadius: '5px',
    },
};

export default Chatbot;