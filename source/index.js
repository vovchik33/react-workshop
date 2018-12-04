// Core
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');

    console.log('→ selectedFilter', selectedFilter);

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
                    <div
                        className = 'filter'
                        data-name = 'upcoming'>
                        <span>Скоро в кинотеатрах</span>
                    </div>
                    <div
                        className = 'filter'
                        data-name = 'popular'>
                        <span>В топ-чартах</span>
                    </div>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<Kinoafisha />, document.getElementById('app'));
