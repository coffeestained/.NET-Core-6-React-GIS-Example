import React, { Component } from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import { Map as ReactMap } from 'react-map-gl';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -73.572,
  latitude: 40.8127,
  zoom: 8.05,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

interface IProps {

}

interface IState {
  mapboxKey: string;
  loading: boolean;
}

export default class Map extends Component<IProps, IState> {
  static displayName = Map.name;

  constructor(props) {
    super(props);
  }

  private layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  componentDidMount() {
    this.getMapBoxKey();
  }

  async getMapBoxKey() {
    const response = await fetch(
      'mapbox/key',
    );
    const data = await response.text();
    this.setState({ mapboxKey: data, loading: false });
  }

  render() {
    const { mapboxKey } = this.state ?? {};

    return (
      <div>
        <h1>Map</h1>

        <p>This is a simple GIS map via Deck.gl. Deck.gl information can be found at <a href='https://deck.gl/docs'>this link.</a></p>

        <p>Deck.gl is a highly customizable map library for almost any map requirement because of its easily extensible architecture. Learn more at <a href='https://deck.gl/docs'>this link.</a></p>

        { mapboxKey ?
          <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            style={{width: 600, height: 400}}
            layers={this.layers}
          >
            <ReactMap
              mapboxAccessToken={mapboxKey}
              initialViewState={INITIAL_VIEW_STATE}
              style={{width: 600, height: 400}}
              mapStyle="mapbox://styles/mapbox/dark-v11" />
          </DeckGL> : ""
        }

      </div>
    );
  }
}
