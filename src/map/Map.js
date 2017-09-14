import React, {Component} from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';


export class MapContainer extends React.Component {

    render() {
        return (
            <Map google={this.props.google}
                 zoom={14}
                 initialCenter={{
                     lat: 43.8212092,
                     lng: -79.3313057
                 }}

            >
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

            </Map>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCmeHTe1H9weAq6yhCnXnQcoZoM47aKUHA')
})(MapContainer)

