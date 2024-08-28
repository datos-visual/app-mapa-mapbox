//Maneja los controles de navegación y cualquier otra funcionalidad de control


import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapControls = ({ mapRef }) => {
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.addControl(new mapboxgl.NavigationControl());
    }
  }, [mapRef]);

  return null;
};

export default MapControls;
