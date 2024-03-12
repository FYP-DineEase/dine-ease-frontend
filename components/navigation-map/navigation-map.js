import React, { useState, useMemo, useCallback, useRef } from 'react';

// Map
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Styles
import * as Styles from './navigation-map.styles';

// Utils
import { MapThemes, MapZoomLevels } from '@/utils/constants';

//Components
import MapTheme from './map-theme/map-theme';
import FavouriteRestaurants from './favourite-restaurants/favourite-restaurants';

const NavigationMap = ({ data }) => {
  const [theme, setTheme] = useState(data.theme);

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

  const flyToLocation = useCallback((long, lat) => {
    mapRef.current?.flyTo({
      center: [long, lat],
      duration: 1500,
      zoom: MapZoomLevels.MAP_ZOOM,
    });
  }, []);

  const onMove = useCallback(({ viewState }) => {
    setViewState(viewState);
  }, []);

  return (
    <React.Fragment>
      <MapTheme selectedTheme={theme} setTheme={setTheme} details={data.userId} />
      <FavouriteRestaurants
        restaurants={data.restaurants}
        flyToLocation={flyToLocation}
      />
      <Styles.MapContainer>
        <ReactMapGL
          {...viewState}
          ref={mapRef}
          width="100%"
          height="100%"
          onMove={onMove}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
          mapStyle={MapThemes[theme]}
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
    </React.Fragment>
  );
};

export default React.memo(NavigationMap);
