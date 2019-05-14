import React, { Component } from 'react';

    const Weather = (props) =>{
        return(
            <div>
                {/* preventing paragraphs with no info from being displayed */}
                {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
                {props.temperature && <p>Temperature: {props.temperature}</p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.description && <p>Conditions: {props.description}</p>}
                {props.error && <p>{props.error}</p>}
            </div>
        );
    }

export default Weather;