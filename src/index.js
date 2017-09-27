/*global google*/

import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';

const coordinates = { lat: 43.6423446, lng: -79.3881737 };
ReactDOM.render(
    <Map
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCmeHTe1H9weAq6yhCnXnQcoZoM47aKUHA"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    coordinates={coordinates}
    />,
    document.getElementById('root')
);
