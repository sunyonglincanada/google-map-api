/*global google*/
import React, { PureComponent } from "react";
import transit from "./transit.json";
import map from "lodash/map";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    Polyline,
    InfoWindow
} from "react-google-maps";
class Transit extends PureComponent {
    render() {
        const result = [];
        return (
            <div>
                {
        map(transit[1].metros, (metro, index) => {
            let points = [];
            metro.route.map(ll => {
                const latlng = ll.split(",");
                const point = new google.maps.LatLng(latlng[0], latlng[1]);
                points.push(point);
            });
            return (
                <Polyline
                    key={index}
                    path={points}
                    options={{
                        strokeColor: metro.color,
                        strokeWeight: 2,
                        geodesic: true
                    }}
                />
            );
        })}
        </div>
    )
    }
}

export default Transit;
