// Core
import React, { memo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Spring } from 'react-spring';

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
        _getMoviesByFilter(nextFilter);
    };

    const styles = getStyles({
        selectedFilter,
    });

    // componentDidMount + componentWillUnmount
    useEffect(() => {
        _getMoviesByFilter(selectedFilter);
    }, []);

    const moviesJSX = movies.map((movie) => {
        return (
            <Spring
                from = {{
                    opacity: 0,
                }}
                key = { movie.id }
                to = {{
                    opacity: 1,
                }}>
                {(props) => (
                    <div
                        className = 'movie'
                        style = { props }>
                        <div className = 'poster'>
                            <span className = 'genre'>{movie.genre}</span>
                            <img src = { movie.poster } />
                            <span className = 'rating'>{movie.rating}</span>
                        </div>
                        <span className = 'title'>{movie.title}</span>
                    </div>
                )}
            </Spring>
        );
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
            <div className = 'content'>{moviesJSX}</div>
        </>
    );
});

ReactDOM.render(<Kinoafisha />, document.getElementById('app'));
