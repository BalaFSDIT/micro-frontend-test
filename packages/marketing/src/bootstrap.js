import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const mount = function(el) {
    if(el) {
        ReactDOM.render(<App></App>, el);
    }
}
if (process.env.NODE_ENV === 'development') {
    mount(document.querySelector('#marketing-site-root'));
}

export { mount };