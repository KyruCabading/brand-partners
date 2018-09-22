import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import bird from '../../local/logo-bird.png'

class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 14.424806,
                longitude: 121.033936,
                zoom: 16
            },
            marker: {
                latitude: 14.424806,
                longitude: 121.033936
            }
        }
    }

    componentDidMount() {
        this.setState({
            latitude: this.props.latitude,
            longitude: this.props.longitude
        })
    }


    render() {
        const { marker } = this.state
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapStyle="mapbox://styles/kyrusri/cjku9lsa914l92rlt4x2cqzte"
                mapboxApiAccessToken="pk.eyJ1Ijoia3lydXNyaSIsImEiOiJjamt1OWg2cXowMzNrM2twZGhiaXJiZjNtIn0.SOeTmzc8kYHHSD7SdDD77g"
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
                <Marker latitude={marker.latitude} longitude={marker.longitude}>
                    <img src={bird} style={{ height: 20 }} />
                </Marker>
            </ReactMapGL>
        );
    }
}

export default Map