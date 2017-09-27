/*global google*/

import React from 'react';

import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import Marker from 'react-google-maps/lib/Marker';
import InfoWindow from 'react-google-maps/lib/InfoWindow';
import FaAnchor from "react-icons/lib/fa/anchor";
import MapApp from './MapApp'


class Map extends React.Component {

    state = {
        isOpen: false
    }

    handleOpenInfoWindow = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {

        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{ lat: this.props.coordinates.lat, lng: this.props.coordinates.lng }}
                ref={map => {
                    // todo feature of window.service
                    // window.service = new google.maps.places.PlacesService(map.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED']);
                }}
            >
                <Marker
                    position={{ lat: this.props.coordinates.lat, lng: this.props.coordinates.lng }}
                    onClick={this.handleOpenInfoWindow}
                >
                    {this.state.isOpen? <InfoWindow onCloseClick={this.handleOpenInfoWindow}>
                        <FaAnchor />
                    </InfoWindow> : null}
                </Marker>
                <MapApp />
            </GoogleMap>
        )

    }
}
export default withScriptjs(withGoogleMap(Map))


