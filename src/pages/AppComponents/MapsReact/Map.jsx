/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { Button, Modal } from "antd";
// const center = useMemo(
//     () => ({ lat: 27.63820799904629, lng: 85.51344372504178 }),
//     []
//   );
export default function Map({ centerCoords, markerState, setMarkerState }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const center = useMemo(
    () => centerCoords || { lat: 27.63820799904629, lng: 85.51344372504178 },
    [centerCoords]
  );
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setMarkerState(center);
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "",
  });
  if (!isLoaded) return <div>Loading....</div>;
  return (
    <>
      <Button size="small" type="primary" onClick={showModal}>
        Open Map
      </Button>
      <Modal
        title="Map"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ top: 20 }}
      >
        <MapFunc
          markerState={markerState}
          setMarkerState={setMarkerState}
          center={center}
        />
      </Modal>
    </>
  );
}
function MapFunc({ markerState, setMarkerState, center }) {
  const mapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerState({ lat, lng });
  };
  return (
    <GoogleMap
      zoom={18}
      center={center}
      mapContainerClassName="map-container"
      onClick={mapClick}
    >
      <MarkerF position={markerState} />
    </GoogleMap>
  );
}
