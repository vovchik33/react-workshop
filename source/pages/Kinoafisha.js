// Core
import React, { Component } from 'react';

// Helpers
import { getStyles } from '../helpers';

// Api
import { api } from '../API';

export class Kinoafisha extends Component {
    state = {
        selectedFilter: 'upcoming',
        movies:         [],
    };

    _getMoviesByFilter = async (nextFilter) => {
        const movies = await api.getMovies(nextFilter);

        this.setState({
            movies,
        });
    };

    _selectFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

        this.setState({
            selectedFilter: nextFilter,
        });
    };

    render() {
        const styles = getStyles(this.state);

        console.log('→ this.state.movies', this.state.movies);
        console.log('→ this.state.selectedFilter', this.state.selectedFilter);

        return (
            <>
                <div className = 'header'>
                    <div className = 'logo' />
                    <div className = 'filters'>
                        <div
                            className = { styles.latestFilter }
                            data-name = 'latest'
                            onClick = { this._selectFilter }>
                            <span>Новинки 2018</span>
                        </div>
                        <div
                            className = { styles.upcomingFilter }
                            data-name = 'upcoming'
                            onClick = { this._selectFilter }>
                            <span>Скоро в кинотеатрах</span>
                        </div>
                        <div
                            className = { styles.popularFilter }
                            data-name = 'popular'
                            onClick = { this._selectFilter }>
                            <span>В топ-чартах</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
