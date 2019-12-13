import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = props => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    new window.google.maps.Marker({ position: center, map });
  }, [center, zoom]);

  return <div className={`map ${props.className}`} style={props.style} ref={mapRef}></div>;
};

export default Map;
