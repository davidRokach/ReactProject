import { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Spinner from "./Spinner";
import { geocodingMaps } from "../cards/services/cardApiService";
import Erorr from "./Error";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ address }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "api key",
  });

  const [map, setMap] = useState(null);

  const [location, setLocation] = useState(null);

  const fetchData = async () => {
    try {
      const data = await geocodingMaps(address);
      const { lat, lng } = data.results[0].geometry.location;
      setLocation({ lat, lng });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(location);
      console.log(map);
      map.fitBounds(bounds);
      setMap(map);
    },
    [location]
  );

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const onLoadMarker = (marker) => {
    console.log(location);
    // console.log("marker: ", marker);
  };

  if (loadError) {
    return <Erorr errorMessage="the map is not working right now" />;
  }

  if (!location) {
    return <Erorr errorMessage="the address of the card was not found " />;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={14}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      <Marker visible={true} position={location} onLoad={onLoadMarker} />
    </GoogleMap>
  ) : (
    <Spinner />
  );
};
export default Map;
