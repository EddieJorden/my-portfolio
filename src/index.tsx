import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Cool developer console message
console.log(
  '%c👋 Hey there, fellow developer!',
  'color: #0096ff; font-size: 24px; font-weight: bold;'
);
console.log(
  '%cLike what you see? Let\'s build something amazing together!',
  'color: #0066cc; font-size: 16px;'
);
console.log(
  '%c📧 eddie@eddiemoger.com | 🔗 github.com/EddieJorden',
  'color: #00d4ff; font-size: 14px;'
);
console.log(
  '%cBuilt with React + TypeScript + ❤️',
  'color: #10b981; font-size: 12px; font-style: italic;'
);
console.log('%c ', 'padding: 40px; background: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'60\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E🚀%3C/text%3E%3C/svg%3E") no-repeat center;');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
