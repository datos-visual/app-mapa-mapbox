//Este componente manejará la carga dinámica y la gestión de las capas.


import React from 'react';
import PointsLayer from './PointsLayer';
// Import other layers as needed

const LayerManager = ({ mapRef }) => {
  return (
    <>
      <PointsLayer mapRef={mapRef} />
      {/* Include other layers like ChoroplethLayer, HeatmapLayer, etc. */}
    </>
  );
};

export default LayerManager;
