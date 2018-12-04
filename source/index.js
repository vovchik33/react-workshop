// Core
import React, { memo, useState } from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';
import { getStyles } from './helpers';

const Kinoafisha = memo(() => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');

    const _updateMoviesByFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

        setSelectedFilter(nextFilter);
    };

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
                        onClick = { _updateMoviesByFilter }>
                        <span>Новинки 2018</span>
                    </div>
                    <div
                        className = { styles.upcomingFilter }
                        data-name = 'upcoming'
                        onClick = { _updateMoviesByFilter }>
                        <span>Скоро в кинотеатрах</span>
                    </div>
                    <div
                        className = { styles.popularFilter }
                        data-name = 'popular'
                        onClick = { _updateMoviesByFilter }>
                        <span>В топ-чартах</span>
                    </div>
                </div>
            </div>
        </>
    );
});

ReactDOM.render(<Kinoafisha />, document.getElementById('app'));
