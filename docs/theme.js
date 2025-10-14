/**
 * Theme switcher for system.css
 * Handles dark/light theme toggling and persistence
 */

(function() {
  'use strict';

  // Get stored theme or default to 'light'
  const getStoredTheme = () => localStorage.getItem('theme') || 'light';
  
  // Store theme preference
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
  
  // Apply theme to document
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };
  
  // Toggle between light and dark theme
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    setStoredTheme(newTheme);
    updateThemeButton(newTheme);
  };
  
  // Update theme button text/icon
  const updateThemeButton = (theme) => {
    const themeButtons = document.querySelectorAll('.theme-switcher');
    themeButtons.forEach(button => {
      button.textContent = theme === 'light' ? '☀️ Light' : '🌙 Dark';
      button.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
    });
  };
  
  // Initialize theme on page load
  const initTheme = () => {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme);
    updateThemeButton(storedTheme);
    
    // Add click listeners to all theme switcher buttons
    const themeButtons = document.querySelectorAll('.theme-switcher');
    themeButtons.forEach(button => {
      button.addEventListener('click', toggleTheme);
    });
  };
  
  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
