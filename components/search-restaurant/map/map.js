import React, { lazy, useMemo, useCallback, useState, useRef } from 'react';

// Map
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const HeatMap = lazy(() => import('./heat-map/heat-map'));

// Styles
import * as Styles from './map.styles';
import { Box } from '@mui/material';

// Utils
import { NAV_HEIGHT, MapZoomLevels } from '@/utils/constants';

const Map = ({ restaurants, hoverId }) => {
  const { coordinates } = restaurants[0].location;
  const longitude = coordinates[0];
  const latitude = coordinates[1];

  const initialView = useMemo(
    () => ({
      latitude,
      longitude,
      zoom: 5,
      minZoom: 4,
    }),
    [latitude, longitude]
  );

  const mapRef = useRef(null);
  const [viewState, setViewState] = useState(initialView);

  const onMove = useCallback(({ viewState }) => {
    setViewState(viewState);
  }, []);

  const flyToLocation = useCallback((long, lat) => {
    mapRef.current?.flyTo({
      center: [long, lat],
      duration: 1500,
      zoom: MapZoomLevels.MAP_ZOOM,
    });
  }, []);

  return (
    <Box sx={{ height: `calc(100vh - ${NAV_HEIGHT}px)`, position: 'relative' }}>
      <Styles.MapContainer>
        <ReactMapGL
          {...viewState}
          ref={mapRef}
          width="100%"
          height="100%"
          onMove={onMove}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
          mapStyle={'mapbox://styles/mapbox/streets-v12'}
        >
          {viewState.zoom >= MapZoomLevels.MAX_ZOOM_HEAT_MAP ? (
            restaurants.map((i) => {
              const { coordinates } = i.location;
              return (
                <Marker key={i.slug} longitude={coordinates[0]} latitude={coordinates[1]}>
                  <Styles.Pin hovering={+(i.id === hoverId)} />
                </Marker>
              );
            })
          ) : (
            <HeatMap restaurants={restaurants} />
          )}
          <NavigationControl position={'bottom-right'} showCompass={false} />
        </ReactMapGL>
      </Styles.MapContainer>
    </Box>
  );
};

export default React.memo(Map);
