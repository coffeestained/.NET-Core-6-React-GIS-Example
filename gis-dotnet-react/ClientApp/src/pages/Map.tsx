import React, { Component } from 'react';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer, PolygonLayer } from '@deck.gl/layers';
import { scaleThreshold } from 'd3-scale';
import { Map as ReactMap } from 'react-map-gl';

const DATA_URL =
  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/geojson/vancouver-blocks.json';

// Ripe opportunity for the scale to be a util for re-use sitewide
const COLOR_SCALE = scaleThreshold()
  .domain([-0.6, -0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.05, 1.2])
  .range([0, 960]);

// We could also have a util for generating tooltips more dynamically enabling re-use and dry principles
function getTooltip({object}) {
  return (
    object && {
      html: `\
      <div><b>Average Property Value</b></div>
      <div>${object.properties.valuePerParcel} / parcel</div>
      <div>${object.properties.valuePerSqm} / m<sup>2</sup></div>
      <div><b>Growth</b></div>
      <div>${Math.round(object.properties.growth * 100)}%</div>
      `
    }
  );
}

// Viewport settings
const INITIAL_VIEW_STATE = {
  latitude: 49.254,
  longitude: -123.13,
  zoom: 10,
  maxZoom: 16,
  pitch: 45,
  bearing: 0
};

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
    new GeoJsonLayer({
      id: 'geojson',
      data: DATA_URL,
      opacity: 0.8,
      stroked: false,
      filled: true,
      extruded: true,
      wireframe: true,
      getElevation: (f) => Math.sqrt(f.properties.valuePerSqm) * 10,
      getFillColor: (f) => COLOR_SCALE(f.properties.growth),
      getLineColor: [255, 255, 255],
      pickable: true
    })
    // Add Layers
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
            getTooltip={getTooltip}
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
