import { Card } from "antd";
import Map from "../MapsReact/Map";
import { useMemo, useState } from "react";
export default function Dashboard() {
  const center = useMemo(
    () => ({ lat: 27.63820799904629, lng: 85.51344372504178 }),
    []
  );
  const [markerState, setMarkerState] = useState(center);
  return (
    <Card>
      <Map
        centerCoords={center}
        markerState={markerState}
        setMarkerState={setMarkerState}
      />
      <br /> <br />
      {markerState.lat} {markerState.lng}
    </Card>
  );
}
