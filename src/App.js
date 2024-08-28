


import React from 'react';
import MapContainer from './core/components/MapContainer';

function App() {
  return (
    <MapContainer
      styleUrl="mapbox://styles/mapbox/streets-v11"
      center={[-3.70379, 40.41678]}
      zoom={6}
    />
  );
}

export default App;

