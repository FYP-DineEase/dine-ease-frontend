import React, { useState, useMemo, useCallback, useRef } from 'react';

// Map
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Styles
import * as Styles from './favourites-map.styles';

// Utils
import { MapThemes, MapZoomLevels } from '@/utils/constants';

// Components
import MapTheme from './map-theme/map-theme';
import FavouriteRestaurants from './favourite-restaurants/favourite-restaurants';

const FavouritesMap = ({ data }) => {
  const [theme, setTheme] = useState(data.theme);
  const [hoverId, setHoverId] = useState(null);

  const { coordinates } = data.restaurants?.length && data.restaurants[0].location;
  const longitude = (coordinates && coordinates[0]) || 0;
  const latitude = (coordinates && coordinates[1]) || 0;

  const mapRef = useRef(null);

  const initialView = useMemo(
    () => ({
      latitude,
      longitude,
      zoom: 5,
      minZoom: 4,
    }),
    [latitude, longitude]
  );

  const [viewState, setViewState] = useState(initialView);

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

  const hoverIdHandler = (value) => {
    if (value === hoverId) return;
    setHoverId(value);
  };

  const resetHoverIdHandler = () => {
    setHoverId(null);
  };

  return (
    <React.Fragment>
      <MapTheme selectedTheme={theme} setTheme={setTheme} details={data.userId} />
      <FavouriteRestaurants
        restaurants={data.restaurants}
        flyToLocation={flyToLocation}
        hoverIdHandler={hoverIdHandler}
        resetHoverIdHandler={resetHoverIdHandler}
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
                <Styles.Pin hovering={+(i.id === hoverId)} />
              </Marker>
            );
          })}
          <NavigationControl position={'bottom-right'} showCompass={false} />
        </ReactMapGL>
      </Styles.MapContainer>
    </React.Fragment>
  );
};

export default React.memo(FavouritesMap);
