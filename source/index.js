// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

export const Kinoafisha = () => {
    return <h1 className = 'welcome'>Поехали!</h1>;
};

ReactDOM.render(<Kinoafisha />, document.getElementById('app'));
