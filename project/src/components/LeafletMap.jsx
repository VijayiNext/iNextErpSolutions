import React from 'react';

const LeafletMap = () => {
  const latitude = 28.6275;
  const longitude = 77.3650;

  const delta = 0.00000009; 
  const bbox = [
    (longitude - delta).toFixed(6),
    (latitude - delta).toFixed(6),
    (longitude + delta).toFixed(6),
    (latitude + delta).toFixed(6),
  ].join('%2C');

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <div className="h-full w-full rounded-xl overflow-hidden">
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapUrl}
        style={{ border: 0, borderRadius: '0.75rem' }}
      />
    </div>
  );
};

export default LeafletMap;
