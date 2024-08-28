//Este componente será el contenedor principal del mapa. Dentro de él, gestionaremos la inicialización de Mapbox, la carga de capas, y la integración de controles y tooltips.


import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LayerManager from './Layers/LayerManager';
import MapControls from './Controls/MapControls';

const MapContainer = ({ styleUrl, center, zoom }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current) {
      mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: styleUrl,
        center: center,
        zoom: zoom,
      });

      mapRef.current.on('load', () => {
        setMapLoaded(true);
        console.log('Map has been loaded and is ready to use.');
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [styleUrl, center, zoom]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
      {mapLoaded && (
        <>
          <MapControls mapRef={mapRef} />
          <LayerManager mapRef={mapRef} />
        </>
      )}
    </div>
  );
};

export default MapContainer;
