import React from 'react'
import Polyline  from "react-google-maps/lib/Polyline";
const path = [
    {"lat":-83.674464,"lng":41.331119},
    {"lat":-83.533773,"lng":41.348933},
    {"lat":-83.534508,"lng":41.297062},
    {"lat":-83.645375,"lng":41.268504},
    {"lat":-83.674464,"lng":41.331119}
];
class Haha extends React.Component {
    render() {
        return <Polyline path={path}/>
    }
}
export default Haha