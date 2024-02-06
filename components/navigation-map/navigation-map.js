import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';

// Map
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Styles
import * as Styles from './navigation-map.styles';

// Utils
import { useSelector } from 'react-redux';
import { selectUserState } from '@/store/user/userSlice';

const NavigationMap = ({ data }) => {
  const user = useSelector(selectUserState);

  const location = data.restaurants[0]?.location?.coordinates;
  const longitude = location[0] || 0;
  const latitude = location[1] || 0;

  const mapRef = useRef(null);

  const initialView = useMemo(
    () => ({
      latitude,
      longitude,
      zoom: 5,
      minZoom: 5,
    }),
    [latitude, longitude]
  );

  const [viewState, setViewState] = useState(initialView);

  const locationPath = useCallback((lng, lat) => {
    mapRef.current?.flyTo({
      center: [lng, lat],
      duration: 2000,
      zoom: 6,
    });
  }, []);

  const onMove = useCallback(({ viewState }) => {
    setViewState(viewState);
  }, []);

  return (
    <Styles.MapContainer>
      <ReactMapGL
        {...viewState}
        ref={mapRef}
        width="100%"
        height="100%"
        onMove={onMove}
        mapboxAccessToken={process.env.MAPBOX_API_TOKEN}
        mapStyle={'mapbox://styles/mapbox/streets-v12'}
      >
        {data.restaurants.map((i) => {
          const { coordinates } = i.location;
          return (
            <Marker key={i.slug} longitude={coordinates[0]} latitude={coordinates[1]}>
              <Styles.Pin />
            </Marker>
          );
        })}
        <NavigationControl position={'bottom-right'} showCompass={false} />
      </ReactMapGL>
    </Styles.MapContainer>
  );
};

export default React.memo(NavigationMap);
