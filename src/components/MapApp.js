import React from 'react'
import Transit from './Transit'
import Food from './Food'
class MapApp extends React.Component {
    state = {
        transit: true,
        food: true,
    }
    handleToggleTransit = () => {
        this.setState({transit: !this.state.transit})
    }
    handleToggleFood = () => {
        this.setState({food: !this.state.food})
    }
    render() {
        return (
            <div>
                {this.state.transit? <Transit />: null}
                {this.state.food? <Food />: null}
                <button onClick={this.handleToggleTransit}>transit</button>
                <button onClick={this.handleToggleFood}>food</button>
            </div>
        )
    }
}
export default MapApp