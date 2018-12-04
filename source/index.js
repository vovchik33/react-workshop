// Core
import React, { memo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';
import { getStyles } from './helpers';
import { api } from './API';

const Kinoafisha = memo(() => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    const _getMoviesByFilter = async (nextFilter) => {
        const movies = await api.getMovies(nextFilter);

        setMovies(movies);
    };

    const _updateMoviesByFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

        setSelectedFilter(nextFilter);
    };

    const styles = getStyles({
        selectedFilter,
    });

    // componentDidMount + componentWillUnmount
    useEffect(() => {
        _getMoviesByFilter(selectedFilter);
    }, []);

    console.log('→ movies', movies);

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
