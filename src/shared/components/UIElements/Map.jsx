import React, { useRef } from 'react';

import './Map.css';

const Map = props => {
  const mapRef = useRef();
  const map = new window.google.maps.Map(mapRef.current, {
    center: props.center,
    zoom: props.zoom,
  });

  new window.google.maps.Marker({ position: props.center, map });

  return <div className={`map ${props.className}`} style={props.style} ref={mapRef}></div>;
};

export default Map;
