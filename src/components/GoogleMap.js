import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withProps, withState, withHandlers } from 'recompose';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import Marker from 'react-google-maps/lib/Marker';
import InfoWindow from 'react-google-maps/lib/InfoWindow';
import FaAnchor from "react-icons/lib/fa/anchor";

const MapWithMarkerInfo = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCmeHTe1H9weAq6yhCnXnQcoZoM47aKUHA",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 25.03, lng: 121.6 },
    }),
    withState('zoom', 'onZoomChange', 8),
    withHandlers( () =>{
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onZoomChanged: ({ onZoomChange }) => () => {
                onZoomChange(refs.map.getZoom)
            }
        }
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center}
        ref = {props.onMapMounted}
        onZoomChanged = { props.onZoomChanged}
    >
        <Marker
            position = {props.center}
            onClick = { props.onToggleOpen}
        >
            <InfoWindow
                onCloseClick={ props.onToggleOpen}
            >
                <div>
                    <FaAnchor />
                    {" "}
                    Controlled zoom: {props.zoom}
                </div>
            </InfoWindow>
        </Marker>
    </GoogleMap>
);

export default MapWithMarkerInfo
