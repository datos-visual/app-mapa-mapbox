//Componente de capa de puntos


import React, { useEffect } from 'react';
import { loadCsvToGeoJson } from '../../services/data/loadData';

const PointsLayer = ({ mapRef }) => {
  useEffect(() => {
    const addLayer = async () => {
      const geoJsonData = await loadCsvToGeoJson('https://your-data-url.csv');
      if (mapRef.current) {
        mapRef.current.addSource('points-source', {
          type: 'geojson',
          data: geoJsonData,
        });

        mapRef.current.addLayer({
          id: 'points-layer',
          type: 'circle',
          source: 'points-source',
          paint: {
            'circle-radius': 6,
            'circle-color': '#B42222',
          },
        });
      }
    };
    addLayer();
  }, [mapRef]);

  return null;
};

export default PointsLayer;
