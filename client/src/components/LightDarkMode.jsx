import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/LightDarkMode.css';

const LightDarkMode = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default LightDarkMode;