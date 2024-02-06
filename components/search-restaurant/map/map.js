import React, { useMemo, useCallback, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectUserState } from '@/store/user/userSlice';

// Map
import ReactMapGL, { Marker, Source, Layer, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Components
import DetailsCard from './details-card/details-card';

// Styles
import * as Styles from './map.styles';
import { Box, Grid, Tooltip } from '@mui/material';
import { SectionContainer, Text } from '@/components/UI';

// Icons
import MarkerIcon from '@mui/icons-material/Room';
import MyLocationIcon from '@mui/icons-material/MyLocation';

// Helpers
import { getRoute } from '@/helpers/mapHelpers';

// Utils
import { NAV_HEIGHT, MapProfiles, MapZoomLevels } from '@/utils/constants';

const Map = () => {
  // const { coordinates } = restaurant.location;
  const longitude = 0;
  const latitude = 0;

  const mapRef = useRef(null);

  const user = useSelector(selectUserState);

  const initialView = useMemo(
    () => ({
      latitude,
      longitude,
      zoom: 2,
      minZoom: 2,
    }),
    [latitude, longitude]
  );

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

  const locationHandler = useCallback(async () => {
    flyToLocation(longitude, latitude);
  }, [latitude, longitude, flyToLocation]);

  return (
    <Box sx={{ height: `calc(100vh - ${NAV_HEIGHT}px)`, position: 'relative' }}>
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
          <NavigationControl position={'top-left'} showCompass={false} />
        </ReactMapGL>
      </Styles.MapContainer>
    </Box>
  );
};

export default React.memo(Map);
