/*global google*/

import React from 'react';

import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import Marker from 'react-google-maps/lib/Marker';
import MapApp from './MapApp'


class Map extends React.Component {
    render() {
        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{ lat: 43.6423446, lng: -79.3881737 }}
                ref={map => {
                    window.service = new google.maps.places.PlacesService(map.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED']);
                }}
            >
                <Marker
                    position={{ lat: 43.6423446, lng: -79.3881737 }}
                />
                <MapApp />
            </GoogleMap>
        )

    }
}
export default withScriptjs(withGoogleMap(Map))


