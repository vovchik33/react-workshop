// Core
import React, { memo, useState } from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';
import { getStyles } from './helpers';

const Kinoafisha = memo(() => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');

    console.log('→ selectedFilter', selectedFilter);

    const styles = getStyles({
        selectedFilter,
    });

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = { styles.latestFilter }
                        data-name = 'latest'
                        onClick = { () => setSelectedFilter('latest') }>
                        <span>Новинки 2018</span>
                    </div>
                    <div
                        className = { styles.upcomingFilter }
                        data-name = 'upcoming'>
                        <span>Скоро в кинотеатрах</span>
                    </div>
                    <div
                        className = { styles.popularFilter }
                        data-name = 'popular'>
                        <span>В топ-чартах</span>
                    </div>
                </div>
            </div>
        </>
    );
});

ReactDOM.render(<Kinoafisha />, document.getElementById('app'));
