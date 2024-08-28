


import { useState, useEffect } from 'react';

export const useTooltip = (mapRef, sourceLayer) => {
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mapRef.current || !sourceLayer) return;

    const handleMouseMove = (e) => {
      if (!mapRef.current.getLayer(sourceLayer)) return;
      const features = mapRef.current.queryRenderedFeatures(e.point, { layers: [sourceLayer] });

      if (features.length) {
        const feature = features[0];
        const properties = feature.properties;

        setTooltipData({
          text: properties.name || 'No Name',
          additionalData: properties.value || null,
        });
        setTooltipPosition({ x: e.point.x, y: e.point.y });
      } else {
        setTooltipData(null);
      }
    };

    mapRef.current.on('mousemove', handleMouseMove);

    return () => {
      if (mapRef.current) {
        mapRef.current.off('mousemove', handleMouseMove);
      }
    };
  }, [mapRef, sourceLayer]);

  return { tooltipData, tooltipPosition };
};
