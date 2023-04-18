import React, { Component } from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import { Map as ReactMap } from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'your_mapbox_token';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

export default class Map extends Component {
  static displayName = Map.name;

  private layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Map</h1>

        <p>This is a simple GIS map via Deck.gl. Deck.gl information can be found at <a href='https://www.react-simple-maps.io/'>this link.</a></p>

        <p>As I understand it, Deck.gl is a highly customizable map library for almost any map requirement because of its easily extensible architecture. Learn more at <a href='https://deck.gl/docs'>this link.</a></p>

        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={this.layers}
        >
          <ReactMap mapboxAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
      </div>
    );
  }
}
