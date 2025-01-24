import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18+
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './styles/main.css';
import './styles/tailwind.css';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with Router and AuthProvider
root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
