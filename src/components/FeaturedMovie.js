import React from 'react';
import './FeatureMovie.css';

export default ({item}) => {
    return (
        <div>
            <section className="featured">
                <div>{item.original_name}</div>
            </section>
        </div>
    );
}