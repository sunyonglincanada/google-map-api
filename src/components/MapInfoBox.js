/*global google*/

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withProps } from 'recompose';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import InfoBox from 'react-google-maps/lib/addons/InfoBox';

const MapInfoBox = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCmeHTe1H9weAq6yhCnXnQcoZoM47aKUHA",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 25.03, lng: 121.6 },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={5}
        defaultCenter={props.center}
    >
        <InfoBox
            defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
            <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                    Hello from Taipei
                </div>
            </div>
        </InfoBox>
    </GoogleMap>
);

export default MapInfoBox
