import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';

// Map
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import MapMarker from './marker/marker';
import 'mapbox-gl/dist/mapbox-gl.css';

// Styles
import * as Styles from './location.styles';

// Utils
import { MapZoomLevels } from '@/utils/constants';

const Location = ({ location, updateLocation }) => {
  const { coordinates } = location;
  const longitude = coordinates[0];
  const latitude = coordinates[1];

  const mapRef = useRef(null);
  const [newMarker, setNewMarker] = useState(null);

  const initialView = useMemo(
    () => ({
      latitude,
      longitude,
      zoom: 1,
      minZoom: 1,
    }),
    [latitude, longitude]
  );

  const [viewState, setViewState] = useState(initialView);

  const flyToLocation = useCallback(
    (duration) => {
      if (longitude && latitude) {
        mapRef.current?.flyTo({
          center: [longitude, latitude],
          duration: duration || 3000,
          zoom: MapZoomLevels.MAP_ZOOM,
        });
      }
    },
    [longitude, latitude]
  );

  useEffect(() => {
    flyToLocation();
  }, [flyToLocation]);

  const onMove = useCallback(({ viewState }) => {
    setViewState(viewState);
  }, []);

  // intialize new marker
  const handleMapClick = useCallback((event) => {
    const { lng, lat } = event.lngLat;
    setNewMarker([lng, lat]);
  }, []);

  const confirmMark = useCallback((data) => {
    const point = mapRef.current.project(data);
    const features = mapRef.current.queryRenderedFeatures(point, {
      layers: ['water'],
    });

    if (features.length > 0) {
      throw new Error('Unable to mark on water');
    }
    updateLocation(data);
    // eslint-disable-next-line
  }, []);

  return (
    <Styles.MapContainer>
      <ReactMapGL
        {...viewState}
        ref={mapRef}
        width="100%"
        height="100%"
        onMove={onMove}
        onClick={handleMapClick}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        mapStyle={'mapbox://styles/mapbox/streets-v12'}
      >
        {latitude && longitude && (
          <MapMarker
            newMarker={newMarker}
            confirmMark={confirmMark}
            flyToLocation={flyToLocation}
            coordinates={[longitude, latitude]}
          />
        )}

        <NavigationControl position={'bottom-right'} showCompass={false} />
      </ReactMapGL>
    </Styles.MapContainer>
  );
};

export default React.memo(Location);
