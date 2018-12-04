// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

const Kinoafisha = () => {
    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = 'filter'
                        data-name = 'latest'>
                        <span>Новинки 2018</span>
                    </div>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<Kinoafisha />, document.getElementById('app'));
